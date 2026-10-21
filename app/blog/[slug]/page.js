import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body
  }
`;

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;

  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">
          Blog Post Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-4">
        {post.title}
      </h1>

      {/* Published Date */}
      <p className="text-gray-500 mb-10">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(1200).height(600).url()}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full rounded-xl mb-10"
        />
      )}

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </div>

    </main>
  );
}