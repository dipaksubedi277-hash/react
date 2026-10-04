
function Blog() {
  const posts = [
    {
      title: "Getting Started with React",
      description:
        "Learning the basics of React components, JSX and props."
    },
    {
      title: "Understanding JavaScript",
      description:
        "Exploring JavaScript fundamentals and how they are used in web development."
    },
    {
      title: "My Web Development Journey",
      description:
        "Some lessons, experiences and challenges from my journey as a developer."
    }
  ];

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <p className="text-green-500 font-semibold mb-2">
          MY BLOG
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Latest Articles
        </h1>

        <p className="text-gray-600 max-w-2xl mb-12">
          I share what I learn about programming, web development
          and technology.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {posts.map((post, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-2xl p-6
              hover:border-green-400 hover:shadow-lg
              transition-all duration-300"
            >
              <p className="text-sm text-green-500 mb-4">
                ARTICLE 0{index + 1}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {post.title}
              </h2>

              <p className="text-gray-600 leading-7 mb-5">
                {post.description}
              </p>

              <button className="text-green-600 font-semibold hover:underline">
                Read More →
              </button>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Blog;

