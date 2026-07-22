import Link from 'next/link';
import { portfolioItems } from '@/lib/content';

export default function PortfolioPage() {
  return (
    <>
      <section className="container py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">Portfólio</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Trabalhos que unem design, estratégia e resultados.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Explore projetos reais desenvolvidos para marcas digitais de alto impacto.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Link key={item.slug} href={`/portfolio/${item.slug}`} className="glass-card overflow-hidden rounded-3xl border border-white/10 p-8 transition hover:-translate-y-1">
              <div className="mb-6 h-44 rounded-[1.75rem] bg-slate-900/70" />
              <p className="text-sm uppercase tracking-[0.3em] text-brand">{item.category}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-slate-300">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
