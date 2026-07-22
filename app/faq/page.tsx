import { Section } from '@/components/ui/Section';
import { faqItems } from '@/lib/content';

export default function FAQPage() {
  return (
    <>
      <section className="container py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">FAQ</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Perguntas frequentes sobre projetos e planejamento digital.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Esclareça dúvidas comuns sobre nossos processos, prazos e modalidades de atendimento.</p>
        </div>
      </section>

      <Section title="Perguntas frequentes" description="Respostas claras para ajudar você a avançar com confiança.">
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div key={item.question} className="glass-card rounded-3xl border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-white">{item.question}</h3>
              <p className="mt-4 text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
