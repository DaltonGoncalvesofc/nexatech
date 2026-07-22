import { Section } from '@/components/ui/Section';
import { plans } from '@/lib/content';
import { Button } from '@/components/ui/Button';

export default function PlanosPage() {
  return (
    <>
      <section className="container py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">Planos</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Escolha o plano certo para escalar sua marca.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Planos estratégicos para cada fase do seu negócio, desde presença digital até projetos avançados com IA e automação.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className="glass-card rounded-3xl border border-white/10 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-brand">{plan.title}</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">{plan.price}</h2>
              <p className="mt-3 text-slate-300">{plan.description}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/orcamento">Contratar</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section title="Comparativo de planos" description="Veja rapidamente qual solução entrega mais valor para seu projeto.">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm text-slate-300">
            <thead className="bg-slate-950/80">
              <tr>
                <th className="px-6 py-4">Recursos</th>
                {plans.map((plan) => (
                  <th key={plan.title} className="px-6 py-4">{plan.title}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {['Site institucional', 'SEO', 'Design premium', 'Suporte dedicado'].map((feature) => (
                <tr key={feature} className="border-t border-white/10">
                  <td className="px-6 py-4 font-medium text-white">{feature}</td>
                  {plans.map((plan) => (
                    <td key={`${plan.title}-${feature}`} className="px-6 py-4">{plan.features.some((item) => item.includes(feature.split(' ')[0])) ? '✔️' : '—'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
