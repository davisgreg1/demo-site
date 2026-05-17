import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-background px-6 py-20 text-center">
      <div className="max-w-lg rounded-3xl border border-border bg-white p-12 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Page not found</p>
        <h1 className="mt-4 text-3xl font-bold text-foreground">We couldn’t find that page.</h1>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">Return home or contact us if you need help booking service for your property.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-slate-900">
          Back to home
        </Link>
      </div>
    </div>
  );
}
