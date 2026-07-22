export default function TermosPage() {
  return (
    <section className="container py-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-12 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-brand">Termos de Uso</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Regras e responsabilidades para uso do site</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">Ao utilizar o site da NexaTech, você concorda com os termos de uso e com nossa forma de prestação de serviços.</p>
        <div className="mt-10 space-y-6 text-slate-300">
          <p><strong>Propriedade intelectual:</strong> todo conteúdo do site é protegido e não pode ser reproduzido sem autorização.</p>
          <p><strong>Responsabilidade:</strong> buscamos manter informações corretas, mas não nos responsabilizamos por alterações ou indisponibilidades temporárias.</p>
          <p><strong>Uso do serviço:</strong> a contratação de serviços deve ser formalizada por orçamento e termos específicos entre a NexaTech e o cliente.</p>
        </div>
      </div>
    </section>
  );
}
