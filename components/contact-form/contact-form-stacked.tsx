import type { ChangeEvent } from "react";
import type { ContactFormValues } from "./types";
import { Input } from "@/components/primitives/input";
import { Textarea } from "@/components/primitives/textarea";
import { Button } from "@/components/primitives/button";

interface ContactFormStackedProps {
  values: ContactFormValues;
  errors: Record<string, string | undefined>;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

export function ContactFormStacked({ values, errors, onChange, onSubmit }: ContactFormStackedProps) {
  return (
    <form className="space-y-6" onSubmit={(event) => { event.preventDefault(); onSubmit(); }}>
      <div>
        <label className="block text-sm font-medium text-foreground">Name</label>
        <Input name="name" value={values.name} onChange={onChange} aria-invalid={Boolean(errors.name)} />
        {errors.name ? <p className="mt-2 text-xs text-danger">{errors.name}</p> : null}
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground">Email</label>
        <Input name="email" type="email" value={values.email} onChange={onChange} aria-invalid={Boolean(errors.email)} />
        {errors.email ? <p className="mt-2 text-xs text-danger">{errors.email}</p> : null}
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground">Phone</label>
        <Input name="phone" value={values.phone} onChange={onChange} aria-invalid={Boolean(errors.phone)} />
        {errors.phone ? <p className="mt-2 text-xs text-danger">{errors.phone}</p> : null}
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground">Message</label>
        <Textarea name="message" value={values.message} onChange={onChange} aria-invalid={Boolean(errors.message)} />
        {errors.message ? <p className="mt-2 text-xs text-danger">{errors.message}</p> : null}
      </div>
      <input type="text" name="honeypot" className="hidden" autoComplete="off" />
      <Button type="submit">Send message</Button>
    </form>
  );
}
