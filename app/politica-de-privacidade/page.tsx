export default function PoliticaPage() {
  return (
    <section className="container py-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-12 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-brand">Política de Privacidade</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Como usamos e protegemos seus dados</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">A NexaTech coleta apenas as informações necessárias para atender suas solicitações, com transparência e segurança.</p>
        <div className="mt-10 space-y-6 text-slate-300">
          <p><strong>Dados pessoais:</strong> nome, email, telefone e mensagem são usados apenas para contato e elaboração de propostas.</p>
          <p><strong>Segurança:</strong> mantemos práticas de proteção para dados de nossos clientes e visitantes do site.</p>
          <p><strong>Compartilhamento:</strong> não compartilhamos informações pessoais com terceiros sem consentimento.</p>
        </div>
      </div>
    </section>
  );
}
