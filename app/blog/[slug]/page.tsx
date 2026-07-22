import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/content';

export default async function BlogPostPage(props: { params?: Promise<{ slug: string }> }) {
  const resolvedParams = await props.params;
  if (!resolvedParams) {
    notFound();
  }
  const post = blogPosts.find((item) => item.slug === resolvedParams.slug);
  if (!post) {
    notFound();
  }

  return (
    <section className="container py-20">
      <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-brand">{post.category}</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">{post.title}</h1>
        <p className="mt-4 text-sm text-slate-400">{post.date} · {post.author}</p>
        <div className="mt-8 space-y-6 text-slate-300">
          <p>{post.content}</p>
          <p>Este artigo oferece uma visão estratégica das ações que podem transformar a presença digital da sua empresa.</p>
        </div>
      </div>
    </section>
  );
}
