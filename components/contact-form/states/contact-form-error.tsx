interface ContactFormErrorProps {
  message: string;
}

export function ContactFormError({ message }: ContactFormErrorProps) {
  return (
    <div className="rounded-3xl border border-danger/30 bg-danger/10 p-8 text-sm text-danger">
      {message}
    </div>
  );
}
