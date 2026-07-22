'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(3, 'Informe seu nome'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Telefone inválido'),
  message: z.string().min(10, 'Escreva sua mensagem')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('Contato enviado', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="text-sm font-medium text-slate-200">Nome</label>
        <input {...register('name')} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 text-white outline-none transition focus:border-brand" />
        {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
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
        <label className="text-sm font-medium text-slate-200">Mensagem</label>
        <textarea {...register('message')} rows={5} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-3 text-white outline-none transition focus:border-brand" />
        {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center rounded-3xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitSuccessful ? 'Mensagem enviada' : 'Enviar mensagem'}
      </button>
    </form>
  );
}
