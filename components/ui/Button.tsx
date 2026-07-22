import type { ReactNode } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline';

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const styles: Record<ButtonVariant, string> = {
  primary: 'inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand/90',
  outline: 'inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand hover:text-brand'
};

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={`${styles[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={`${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
