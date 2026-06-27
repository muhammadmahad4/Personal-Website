import { Link, useParams } from "react-router-dom";
import { getBlogPostBySlug } from "../data/portfolioData.js";

function MarkdownContent({ content }) {
  const blocks = content.split("\n\n");

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-brand-600 prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-slate-800">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="mb-4 mt-8 text-2xl font-semibold text-slate-900 dark:text-white">
              {block.replace("## ", "")}
            </h2>
          );
        }
        if (block.startsWith("```")) {
          const lines = block.split("\n");
          const code = lines.slice(1, -1).join("\n");
          return (
            <pre
              key={i}
              className="my-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100"
            >
              <code>{code}</code>
            </pre>
          );
        }
        const parts = block.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
        return (
          <p key={i} className="mb-4 leading-relaxed text-slate-600 dark:text-slate-400">
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={j} className="font-semibold text-slate-900 dark:text-white">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              if (part.startsWith("`") && part.endsWith("`")) {
                return (
                  <code
                    key={j}
                    className="rounded bg-slate-100 px-1.5 py-0.5 text-sm dark:bg-slate-800"
                  >
                    {part.slice(1, -1)}
                  </code>
                );
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-brand-600 dark:text-brand-400">
          &larr; Back to blog
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
        >
          &larr; Back to blog
        </Link>

        <div className="mb-8 aspect-[21/9] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-10 dark:border-slate-800">
          <MarkdownContent content={post.content} />
        </div>
      </div>
    </article>
  );
}
