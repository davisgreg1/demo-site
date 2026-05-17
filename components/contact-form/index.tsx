"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema, type ContactFormValues, type ContactFormVariant } from "./types";
import { ContactFormError } from "./states/contact-form-error";
import { ContactFormLoading } from "./states/contact-form-loading";
import { ContactFormSuccess } from "./states/contact-form-success";
import { ContactFormInline } from "./contact-form-inline";
import { ContactFormStacked } from "./contact-form-stacked";

interface ContactFormProps {
  variant: ContactFormVariant;
}

type SubmissionState = "idle" | "loading" | "success" | "error";

export function ContactForm({ variant }: ContactFormProps) {
  const [state, setState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      honeypot: "",
    },
  });

  async function handleSubmit(values: ContactFormValues) {
    if (values.honeypot) {
      return;
    }

    setState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const body = await response.json();
        throw new Error(body.message || "Submission failed.");
      }

      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  const formProps = {
    values: form.getValues(),
    errors: form.formState.errors as Record<string, string | undefined>,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      form.setValue(event.target.name as keyof ContactFormValues, event.target.value);
    },
    onSubmit: () => {
      void form.handleSubmit(handleSubmit)();
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Speak with our plumbing team.</h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">Complete the form and we’ll respond with availability, pricing, and next steps.</p>
          </div>
          <div className="rounded-[2rem] border border-border bg-muted p-8 shadow-soft">
            {state === "loading" ? <ContactFormLoading /> : null}
            {state === "success" ? <ContactFormSuccess /> : null}
            {state === "error" ? <ContactFormError message={errorMessage} /> : null}
            {state === "idle" || state === "error" ? (
              variant === "inline" ? <ContactFormInline {...formProps} /> : <ContactFormStacked {...formProps} />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
