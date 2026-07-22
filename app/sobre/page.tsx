import { Section } from '@/components/ui/Section';
import { team, timeline } from '@/lib/content';

export default function SobrePage() {
  return (
    <>
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand">Nossa história</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Quem somos e por que criamos a NexaTech</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Somos uma agência digital que entrega experiências sofisticadas, resultado estratégico e tecnologia de ponta para marcas que desejam crescer com autoridade.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-brand">Missão</p>
            <p className="mt-4 text-slate-300">Criar soluções digitais que unem estética, performance e clareza estratégica para negócios ambiciosos.</p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-brand">Visão</p>
                <p className="mt-3 text-slate-300">Ser referência em transformação digital para empresas que querem liderar seus mercados.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-brand">Valores</p>
                <p className="mt-3 text-slate-300">Inovação, transparência, excelência e foco em resultados reais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Equipe" description="Especialistas em estratégia, design, desenvolvimento e crescimento digital.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="glass-card rounded-3xl border border-white/10 p-7">
              <div className="mb-4 h-16 w-16 rounded-3xl bg-brand/10" />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Linha do tempo" description="Nossa trajetória de crescimento e entregas estratégicas.">
        <div className="space-y-6">
          {timeline.map((item) => (
            <div key={item.year} className="glass-card rounded-3xl border border-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{item.year}</p>
              <p className="mt-3 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
