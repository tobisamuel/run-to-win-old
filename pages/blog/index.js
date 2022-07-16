import Link from "next/link";
import { FeaturedPostCard, Layout, PostCard } from "../../components";
import { getPosts, getFeaturedPost } from "../../services/index";

export async function getStaticProps() {
  // const featuredPost = (await getFeaturedPost()) || [];
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="container mx-auto px-10 md:px-24">
        <h1 className="my-12 text-center text-fuchsia-600 text-4xl font-bold md:text-5xl">
          <Link href="/blog">
            <a>Run2Win Blog</a>
          </Link>
        </h1>

        {/* Posts */}
        <div>
          {/* Featured Post */}
          {/* {featuredPost.map((post) => (
            <FeaturedPostCard key={post.title} post={post} />
          ))} */}

          {/* Other Posts */}
          <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
