import Link from "next/link";
import { Headland_One } from "next/font/google";

const headland = Headland_One({ weight: ["400"], subsets: ["latin"] });

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      description:
        "A deep dive into closures in JavaScript, how they work, and practical examples to leverage them in your code.",
    },
    {
      id: 2,
      title: "10 Tips for Writing Clean CSS",
      description:
        "Learn how to keep your CSS code organized, maintainable, and scalable with these 10 essential tips.",
    },
    {
      id: 3,
      title: "Getting Started with Next.js",
      description:
        "An introductory guide to building React applications using Next.js, covering routing, data fetching, and more.",
    },
    {
      id: 4,
      title: "Why You Should Use TypeScript",
      description:
        "Explore the advantages of TypeScript over vanilla JavaScript and how it can improve the quality of your codebase.",
    },
    {
      id: 5,
      title: "Mastering Flexbox for Responsive Design",
      description:
        "Flexbox is a powerful CSS layout module. Learn how to use it to build flexible, responsive layouts with ease.",
    },
    {
      id: 6,
      title: "SEO Best Practices for Modern Websites",
      description:
        "Discover the key techniques to improve your website's search engine ranking and drive more organic traffic.",
    },
    {
      id: 7,
      title: "Building a RESTful API with Express.js",
      description:
        "Step-by-step tutorial on how to create a RESTful API using Express.js, covering routing, middleware, and CRUD operations.",
    },
    {
      id: 8,
      title: "The Basics of Web Accessibility",
      description:
        "An overview of web accessibility principles and why it's important to make your website usable for everyone.",
    },
  ];

  return (
    <div className={`${headland.className} md:py-2`}>
      <h2 className="text-xl font-semibold text-center my-5">My Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded hover:bg-slate-100 p-5 h-36 relative border-[1px] border-gray-400"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <div className="absolute bottom-5">
              <button className="btn-secondary">
                <Link href={`/blogs/${blog.id}`}>View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
