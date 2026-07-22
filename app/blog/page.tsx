import Link from 'next/link';
import { blogPosts } from '@/lib/content';

export default function BlogPage() {
  return (
    <>
      <section className="container py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Insights, tendências e conteúdo estratégico.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Artigos criados para inspirar decisões digitais, campanhas mais eficazes e posicionamentos de marca fortes.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card rounded-3xl border border-white/10 p-8 transition hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.3em] text-brand">{post.category}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-4 text-slate-300">{post.excerpt}</p>
              <p className="mt-6 text-sm text-slate-400">{post.date} · {post.author}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
