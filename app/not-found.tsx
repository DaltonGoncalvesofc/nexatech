import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container py-28 text-center">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-12 shadow-soft">
        <p className="text-sm uppercase tracking-[0.35em] text-brand">404</p>
        <h1 className="mt-6 text-4xl font-semibold text-white">Página não encontrada</h1>
        <p className="mt-4 text-slate-300">A página que você procura não existe ou foi movida. Vamos levar você de volta à NexaTech.</p>
        <div className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90">
          <Link href="/">Voltar para o início</Link>
        </div>
      </div>
    </section>
  );
}
