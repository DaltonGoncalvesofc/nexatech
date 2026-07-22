'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const budgetSchema = z.object({
  name: z.string().min(3, 'Informe seu nome'),
  company: z.string().min(2, 'Informe sua empresa'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Telefone inválido'),
  service: z.string().min(2, 'Selecione um serviço'),
  message: z.string().min(10, 'Escreva sua mensagem')
});

type BudgetFormValues = z.infer<typeof budgetSchema>;

export function BudgetForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<BudgetFormValues>({ resolver: zodResolver(budgetSchema) });

  const onSubmit = async (data: BudgetFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log('Orçamento solicitado', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="text-sm font-medium text-slate-200">Nome</label>
        <input {...register('name')} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 text-white outline-none transition focus:border-brand" />
        {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium text-slate-200">Empresa</label>
        <input {...register('company')} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 text-white outline-none transition focus:border-brand" />
        {errors.company && <p className="mt-2 text-sm text-red-400">{errors.company.message}</p>}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-200">Email</label>
          <input {...register('email')} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 text-white outline-none transition focus:border-brand" />
          {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium text-slate-200">Telefone</label>
          <input {...register('phone')} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 text-white outline-none transition focus:border-brand" />
          {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-slate-200">Serviço</label>
        <select {...register('service')} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 text-white outline-none transition focus:border-brand">
          <option value="">Selecione um serviço</option>
          <option value="Desenvolvimento Web">Desenvolvimento Web</option>
          <option value="Marketing Digital">Marketing Digital</option>
          <option value="Design Gráfico">Design Gráfico</option>
          <option value="Vídeo Publicitário">Vídeo Publicitário</option>
          <option value="Inteligência Artificial">Inteligência Artificial</option>
        </select>
        {errors.service && <p className="mt-2 text-sm text-red-400">{errors.service.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium text-slate-200">Mensagem</label>
        <textarea {...register('message')} rows={5} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 text-white outline-none transition focus:border-brand" />
        {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center rounded-3xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitSuccessful ? 'Solicitação enviada' : 'Enviar solicitação'}
      </button>
    </form>
  );
}
