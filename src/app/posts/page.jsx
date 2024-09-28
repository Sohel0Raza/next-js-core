import { getData } from "@/services/postApi";
import Link from "next/link";

const PostsPage = async () => {
  const postsData = await getData("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {postsData?.slice(0, 12).map(({ id, title, body }) => (
          <div key={id} className="bg-slate-200 text-sky-900 rounded px-5 pt-5">
            <h2 className="uppercase py-3 text-xl font-semibold text-orange-900 ">
              {title}
            </h2>
            <button className="mb-4">
              <Link href={`/posts/${id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostsPage;
