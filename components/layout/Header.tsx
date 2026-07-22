'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Smartphone, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Planos', href: '/planos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
  { label: 'Orçamento', href: '/orcamento' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/95 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-4 py-5">
        <Link href="/" className="inline-flex items-center gap-3 text-lg font-semibold text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand/15 text-brand">N</span>
          NexaTech
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="https://wa.me/244956610511" target="_blank" className="inline-flex items-center gap-2 rounded-2xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand/90">
            <Smartphone size={18} /> WhatsApp
          </Link>
          <Link href="/orcamento" className="inline-flex items-center gap-2 rounded-2xl border border-brand px-4 py-3 text-sm font-semibold text-brand transition hover:bg-brand/10">
            Orçamento <ArrowUpRight size={16} />
          </Link>
        </div>

        <button type="button" onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-base/95 px-6 py-8 md:hidden">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex w-full items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
            >
              Alternar tema
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
