import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="container py-16">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand">NexaTech</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
      </div>
      {children}
    </section>
  );
}
