import Link from 'next/link';
import { services } from '@/lib/content';

export default function ServicosPage() {
  return (
    <>
      <section className="container py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">Serviços</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Soluções digitais completas para cada etapa do seu negócio.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Conheça nossos serviços criados para acelerar performance, gerar leads e fortalecer a presença da sua marca no ambiente digital.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/servicos/${service.slug}`} className="glass-card group overflow-hidden rounded-3xl border border-white/10 p-8 transition hover:-translate-y-1 hover:border-brand/40">
              <h2 className="text-2xl font-semibold text-white group-hover:text-brand">{service.title}</h2>
              <p className="mt-4 text-slate-300">{service.description}</p>
              <span className="mt-6 inline-flex text-sm font-medium text-brand">Ver detalhes →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
