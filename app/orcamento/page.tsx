import { BudgetForm } from '@/components/forms/BudgetForm';

export default function OrcamentoPage() {
  return (
    <section className="container py-20">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">Orçamento</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Solicite uma proposta personalizada para seu projeto.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Preencha o formulário abaixo com os detalhes do seu projeto e nós retornamos com um plano estratégico e transparente.</p>
        </div>
        <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-soft">
          <BudgetForm />
        </div>
      </div>
    </section>
  );
}
