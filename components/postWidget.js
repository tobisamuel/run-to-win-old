import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [similarPosts, setSimilarPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories).then((results) =>
        setSimilarPosts(results)
      );
    } else {
      getRecentPosts().then((results) => setRecentPosts(results));
    }
  }, [categories, slug]);

  return (
    <div className="p-8 mb-8 bg-white shadow-lg rounded-lg ">
      <h3 className="pb-2 text-xl font-semibold border-b">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>

      {/* Posts */}
      <div className="divide-solid divide-y-2 divide-gray-100">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex items-center w-full py-2">
            <div className="w-16 flex items-center">
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                height={100}
                width={100}
                objectFit="cover"
                className="align-middle rounded-full"
              />
            </div>
            <div className="ml-2">
              <p className="font-xs">
                {moment(post.createdAt).format("DD MMM, YYYY")}
              </p>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
