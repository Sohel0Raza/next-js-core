import { getData } from "@/services/postApi";

export const generateMetadata = async ({ params }) => {
  const post = await getData(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  return {
    title: post.title,
    description: post.body,
  };
};
const PostDatail = async ({ params }) => {
  const { id } = params;
  const post = await getData(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return (
    <div className="h-screen">
      <div className="bg-slate-200 text-sky-900 rounded px-5 pt-5">
        <h2 className="uppercase py-3 text-xl font-semibold text-orange-900 ">
          {post?.title}
        </h2>
        <p className="pb-5">{post?.body}</p>
      </div>
    </div>
  );
};

export default PostDatail;
