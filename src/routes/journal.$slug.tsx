import { createFileRoute, notFound } from "@tanstack/react-router";
import { journalPosts } from "@/lib/journal-data";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/journal/$slug")({
  head: () => ({
    meta: [
      { title: "Journal — Denta Proof Raipur" },
      { name: "description", content: "Read dental tips and oral health guides from Denta Proof in Raipur." },
    ],
  }),
  loader: ({ params }) => {
    const post = journalPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: JournalPostPage,
});

function JournalPostPage() {
  const { post } = Route.useLoaderData() as { post: (typeof journalPosts)[0] };

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      <article className="px-6 py-24 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link to="/journal" className="text-sm text-muted-foreground transition hover:text-foreground">
            ← Back to Journal
          </Link>

          <p className="mt-6 text-xs tracking-[0.25em] text-sand-deep">{post.tag.toUpperCase()}</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{post.title}</h1>

          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>{post.readTime}</span>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
            loading="eager"
          />

          <div className="mt-10 space-y-10">
            {post.content.map((section, i) => (
              <div key={i}>
                <h2 className="font-serif text-2xl">{section.heading}</h2>
                <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
                  {section.paragraphs.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-sand/30 p-8">
            <h3 className="font-serif text-xl">Quick Tips</h3>
            <ul className="mt-4 space-y-3">
              {post.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
