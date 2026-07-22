import Link from 'next/link';

const footerLinks = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' }
];

const servicesLinks = [
  { label: 'Desenvolvimento Web', href: '/servicos/desenvolvimento-web' },
  { label: 'Marketing Digital', href: '/servicos/marketing-digital' },
  { label: 'Design Gráfico', href: '/servicos/design-grafico' },
  { label: 'Inteligência Artificial', href: '/servicos/inteligencia-artificial' }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base/95 py-16">
      <div className="container grid gap-8 xl:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-3 text-lg font-semibold text-white">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/15 text-brand">N</span>
            NexaTech
          </div>
          <p className="max-w-md text-slate-300">Agência digital premium com soluções estratégicas de alto desempenho em websites, marketing, design e inteligência artificial.</p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Contato</p>
            <p className="mt-3 text-sm text-slate-200">geral@nexatech.ao</p>
            <p className="text-sm text-slate-200">+244 956 610 511</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Navegação</h3>
          <div className="mt-6 space-y-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Serviços</h3>
          <div className="mt-6 space-y-3">
            {servicesLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-16 border-t border-white/10 pt-8 text-sm text-slate-500">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NexaTech. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <Link href="/politica-de-privacidade" className="transition hover:text-white">Política de Privacidade</Link>
            <Link href="/termos" className="transition hover:text-white">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
