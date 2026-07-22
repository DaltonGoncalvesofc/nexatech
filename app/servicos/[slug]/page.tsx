import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { services } from '@/lib/content';

export default async function ServicePage(props: { params?: Promise<{ slug: string }> }) {
  const resolvedParams = await props.params;
  if (!resolvedParams) {
    notFound();
  }
  const service = services.find((item) => item.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand">Serviço</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.details}</p>
            <div className="mt-10 space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
              <h2 className="text-xl font-semibold text-white">O que entregamos</h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                {service.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-brand">Categoria</p>
            <p className="mt-3 text-white">{service.category}</p>
            <div className="mt-8">
              <Button href="/orcamento">Solicitar orçamento</Button>
            </div>
          </div>
        </div>
      </section>

      <Section title="Mais serviços" description="Explore outras soluções que podem complementar seu projeto digital.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.filter((item) => item.slug !== service.slug).map((item) => (
            <Button key={item.slug} href={`/servicos/${item.slug}`} variant="outline" className="w-full text-left">
              {item.title}
            </Button>
          ))}
        </div>
      </Section>
    </>
  );
}
