import { ContactForm } from '@/components/forms/ContactForm';
import { Section } from '@/components/ui/Section';

export default function ContatoPage() {
  return (
    <>
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand">Contato</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Fale com a NexaTech</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Envie sua mensagem, solicite informações ou converse sobre o próximo projeto. Estamos prontos para ajudar a sua empresa.</p>
            <div className="mt-10 space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-brand">Nosso escritório</p>
              <p className="text-slate-300">Rua da Inovação, 1520, São Paulo - SP</p>
              <p className="text-slate-300">geral@nexatech.ao</p>
              <p className="text-slate-300">+244 956 610 511</p>
            </div>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
            <ContactForm />
          </div>
        </div>
      </section>

      <Section title="Mapa e atendimento" description="Atendemos empresas de todo o Brasil e projetos internacionais com estratégia digital sólida.">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-slate-300">
          <p>Use o formulário ao lado ou acesse o WhatsApp para atendimento instantâneo.</p>
        </div>
      </Section>
    </>
  );
}
