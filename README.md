# NexaTech Website

Site institucional da agência digital NexaTech, desenvolvido em Next.js 15 com App Router, TypeScript, Tailwind CSS, Framer Motion e SEO básico.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm start`
- `npm run lint`

## Estrutura

- `app/` - rotas e layout global
- `components/` - componentes reutilizáveis
- `components/ui/` - elementos de interface
- `components/layout/` - header, footer e temas
- `components/forms/` - formulários com React Hook Form + Zod
- `lib/` - conteúdo estático do site
- `public/` - imagens e assets estáticos
- `styles/` - estilos globais do Tailwind

## Configuração GitHub

1. Crie um repositório no GitHub.
2. No terminal do projeto, execute:

```bash
git init
git add .
git commit -m "Initial NexaTech website"
git branch -M main
git remote add origin https://github.com/DaltonGoncalvesofc/nexatech.git
git push -u origin main
```

Substitua `SEU_USUARIO` e `NOME_DO_REPO` pelo seu usuário e nome do repositório.

## Deploy

### Vercel (recomendado para Next.js)

- Conecte o GitHub ao Vercel.
- Escolha o repositório.
- O Vercel detecta automaticamente o projeto Next.js.
- O deploy será feito com `npm run build`.

### Netlify

Funciona, mas exige configuração extra para Next.js. Prefira Vercel para menor trabalho e melhor compatibilidade com App Router.

## Contatos na aplicação

- WhatsApp: `https://wa.me/244956610511`
- Email: `geral@nexatech.ao`

## Observações

- O build já foi validado com sucesso.
- O ESLint está configurado e o `npm run lint` passou.
- Se quiser, adicione `vercel.json` para ajustes de deploy específicos.
