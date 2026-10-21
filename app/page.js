import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

const postsQuery = `
  *[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage
  }
`;

export default async function Home() {
  const posts = await client.fetch(postsQuery);

  return (
    <main>

      {/* Hero Section */}
      <section className="bg-gray-100 py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to My Blog
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Discover useful articles, tutorials, and insights about
          technology, programming, and web development.
        </p>

        <a
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Explore Our Blogs
        </a>
      </section>


      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Learn. Explore. Grow.
        </h2>

        <p className="text-gray-600 text-lg">
          Our blog is created to share knowledge and help readers
          learn new technologies in a simple and practical way.
        </p>
      </section>


      {/* Latest Blog Posts */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Latest Blog Posts
          </h2>

          <a
            href="/blog"
            className="text-blue-600 font-medium"
          >
            View All →
          </a>
        </div>

        {posts.length === 0 ? (
          <p>No blog posts available.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post._id}
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                 {post.mainImage && (
                  <Image
                  src={urlFor(post.mainImage).width(600).height(300).url()}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              )}

                <h3 className="text-xl font-bold mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>

                <a
                  href={`/blog/${post.slug.current}`}
                  className="inline-block mt-5 text-blue-600 font-medium"
                >
                  Read More →
                </a>
              </article>
            ))}
          </div>
        )}
      </section>


      {/* Call To Action */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated With Our Latest Articles
        </h2>

        <p className="mb-6">
          Explore our blog and discover something new every day.
        </p>

        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}