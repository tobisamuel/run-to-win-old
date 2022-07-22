import Link from "next/link";
import { FeaturedPostCard, Layout, PostCard } from "../../components";
import { getPosts, getFeaturedPost } from "../../services/index";

export async function getStaticProps() {
  const featuredPost = (await getFeaturedPost()) || [];
  const posts = (await getPosts()) || [];

  return {
    props: { featuredPost, posts },
  };
}

export default function Home({ featuredPost, posts }) {
  const meta = {
    title: "Blog | Run2Win Fitness",
    type: "blog",
  };

  return (
    <Layout pageMeta={meta}>
      <div className="container mx-auto my-12 px-4 space-y-12 md:px-24">
        <h1 className="text-center text-fuchsia-600 text-4xl font-bold md:text-5xl">
          <Link href="/blog">
            <a>Run2Win Blog</a>
          </Link>
        </h1>

        {/* Posts */}
        <div>
          {/* Featured Post */}
          <FeaturedPostCard post={featuredPost} />

          {/* Other Posts */}
          <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2 md:mt-24">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
