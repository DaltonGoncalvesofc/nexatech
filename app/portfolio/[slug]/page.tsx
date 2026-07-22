import { notFound } from 'next/navigation';
import { portfolioItems } from '@/lib/content';

export default async function PortfolioItemPage(props: { params?: Promise<{ slug: string }> }) {
  const resolvedParams = await props.params;
  if (!resolvedParams) {
    notFound();
  }
  const item = portfolioItems.find((project) => project.slug === resolvedParams.slug);
  if (!item) {
    notFound();
  }

  return (
    <section className="container py-20">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">Portfólio</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{item.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{item.summary}</p>
          <div className="mt-10 space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-white">Visão do projeto</h2>
            <p className="text-slate-300">Criamos uma experiência de marca integrada com foco em clareza visual, navegação intuitiva e posicionamento premium.</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-brand">Desafio</p>
          <p className="mt-3 text-slate-300">Transformar a proposta em um produto digital com diferenciação e conversão.</p>
        </div>
      </div>
    </section>
  );
}
