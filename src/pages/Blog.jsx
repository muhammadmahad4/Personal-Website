import SectionHeading from "../components/SectionHeading.jsx";
import BlogCard from "../components/BlogCard.jsx";
import { blogPosts } from "../data/portfolioData.js";

export default function Blog() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Blog"
          title="Pentesting & Walkthroughs"
          description="CTF write-ups, HackTheBox and TryHackMe walkthroughs, and security notes. Designed to support local Markdown posts in the future."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
