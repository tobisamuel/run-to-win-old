import Image from "next/image";
import moment from "moment";
import { Layout } from "../../../components";
import { getSlugs, getPost } from "../../../services";

const Post = ({ post }) => {
  const meta = {
    title: `${post.title} | Run2Win Blog`,
    type: "blog",
  };

  return (
    <Layout pageMeta={meta}>
      <div className="container min-h-screen mx-auto mt-12 px-10 md:px-52">
        <span>{moment(post.createdAt).format("DD MMM, YYYY")}</span>
        <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>
        <p className="mt-3">By {post.author.name}</p>
        <div className="w-full h-48 relative overflow-hidden shadow-md mt-6 hover:bg-gray-100 md:h-96 md:mt-6">
          <Image
            src={post.image.url}
            alt="picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="grid grid-cols-12">
          <p className="mt-6 col-span-12 md:col-span-9 md:text-lg md:mt-12">
            {post.content.text}
          </p>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const post = await getPost(slug);

  return {
    props: { post },
    revalidate: 60 * 60,
  };
}

export async function getStaticPaths() {
  const posts = await getSlugs();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
