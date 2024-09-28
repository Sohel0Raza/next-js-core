import { getPost } from "@/services/postApi";

const PostsPage = async () => {
  const postsData = await getPost();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {postsData?.slice(0, 12).map(({ id, title, body }) => (
          <div key={id} className="bg-slate-600 text-sky-200 rounded px-5 pt-5">
            <h2 className="uppercase py-3 text-xl font-semibold text-orange-200 ">
              {title}
            </h2>
            <p className="pb-4">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostsPage;
