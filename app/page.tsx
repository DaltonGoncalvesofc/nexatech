'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { portfolioItems, services, statistics, testimonials } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">Agência digital premium</span>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">Experiências digitais que entregam crescimento, performance e elegância.</h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">Do desenvolvimento de plataformas modernas ao marketing digital estratégico, criamos soluções completas para posicionar sua marca no topo.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/orcamento" variant="primary">Solicitar Orçamento</Button>
                <Button href="/servicos" variant="outline">Ver Serviços</Button>
              </div>
              <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft sm:grid-cols-3">
                {statistics.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-brand/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow">
                <Image src="/hero-globe.svg" alt="Design 3D NexaTech" width={640} height={640} className="mx-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section title="Parceiros & Reconhecimento" description="Trabalhamos com marcas que buscam excelência e resultados reais.">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {['Nexa', 'Nova', 'Prime', 'Orbit'].map((brand) => (
            <div key={brand} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-center text-sm text-slate-300">{brand}</div>
          ))}
        </div>
      </Section>

      <Section title="Nossos serviços" description="Uma base completa para transformar seu projeto em um produto digital sólido.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Link key={service.slug} href={`/servicos/${service.slug}`} className="glass-card group overflow-hidden rounded-3xl border border-white/10 p-8 transition-all hover:-translate-y-1 hover:border-brand/40">
              <h3 className="text-xl font-semibold text-white group-hover:text-brand">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              <span className="mt-6 inline-flex text-sm font-medium text-brand">Saiba mais →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Portfólio selecionado" description="Projetos com design, conversão e identidade visual estratégica.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item) => (
            <Link key={item.slug} href={`/portfolio/${item.slug}`} className="glass-card group overflow-hidden rounded-3xl border border-white/10 p-6 transition hover:-translate-y-1">
              <div className="mb-4 h-48 overflow-hidden rounded-3xl bg-slate-900/80" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.category}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Depoimentos" description="Feedback de clientes que encontraram resultados reais com a NexaTech.">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((review) => (
            <motion.div key={review.name} whileHover={{ y: -6 }} className="glass-card rounded-3xl border border-white/10 p-7 shadow-soft">
              <p className="text-sm leading-7 text-slate-300">“{review.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brand/20" />
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Pronto para começar?" description="Solicite orçamento e receba uma proposta personalizada para seu próximo projeto.">
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/orcamento" variant="primary">Solicitar Orçamento</Button>
          <Button href="/contato" variant="outline">Fale com a equipe</Button>
        </div>
      </Section>
    </>
  );
}
