import Image from "next/image";
import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Layout } from "../../../components";
import { getSlugs, getPost } from "../../../services";

const Post = ({ post }) => {
  const meta = {
    image: `${post.image.url}`,
    title: `${post.title} | Run2Win Blog`,
    type: "blog",
  };

  const renderers = {
    h1: ({ children }) => <h1 className="text-3xl my-5">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold my-5">{children}</h2>
    ),
    bold: ({ children }) => <strong>{children}</strong>,
    p: ({ children }) => <p className="mb-3">{children}</p>,
    img: ({ src, altText, height, width }) => (
      <Image
        src={src}
        alt={altText}
        height={height}
        width={width}
        objectFit="cover"
      />
    ),
  };

  return (
    <Layout pageMeta={meta}>
      <div className="container min-h-screen mx-auto mt-12 px-4 md:px-28 lg:px-52">
        <div className="space-y-2">
          <div className="w-fit px-2 py-1 bg-fuchsia-100 text-sm text-fuchsia-700 font-medium rounded-sm">
            {post.category.name}
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>
          <div className="flex justify-between items-center">
            <p>By {post.author.name}</p>
            <span className="text-sm">
              {moment(post.createdAt).format("DD MMM, YYYY")}
            </span>
          </div>
        </div>
        <div className="w-full h-48 relative overflow-hidden shadow-md my-6 hover:bg-gray-100 md:h-96 md:my-6">
          <Image
            src={post.image.url}
            alt="picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <RichText content={post.content.raw.children} renderers={renderers} />
        </div>
        <div className="flex mt-6 pt-5 border-t-2">
          <div className="w-28 relative rounded-full overflow-hidden hidden md:block">
            <Image
              src={post.author.image.url}
              alt="text"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="md:ml-3">
            <span>Written by</span>
            <p className="text-xl font-semibold">{post.author.name}</p>
            <p className="">{post.author.bio}</p>
          </div>
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
