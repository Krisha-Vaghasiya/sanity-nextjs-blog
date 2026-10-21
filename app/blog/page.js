import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const postsQuery = `
  *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage
  }
`;

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
  <article key={post._id} className="border rounded-xl overflow-hidden">
    {post.mainImage && (
      <Image
        src={urlFor(post.mainImage).width(800).height(400).url()}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-56 object-cover"
      />
    )}

    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">
        {post.title}
      </h2>

      <p className="text-gray-500 mb-4">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      <Link
        href={`/blog/${post.slug.current}`}
        className="text-blue-600 hover:underline"
      >
        Read More →
      </Link>
    </div>
  </article>
))}
        </div>
      )}
    </main>
  );
}