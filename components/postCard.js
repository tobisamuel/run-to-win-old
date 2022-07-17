import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div>
      <div className="w-full h-48 relative overflow-hidden shadow-md hover:bg-gray-100 md:h-72">
        <Image
          src={post.image.url}
          alt="picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mt-3 space-y-3">
        <h1 className="text-xl text-fuchsia-600 font-semibold cursor-pointer hover:text-fuchsia-800 transition duration-700 md:text-2xl">
          <Link href={`/blog/posts/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className="">{post.excerpt}</p>

        <div className="text-sm">
          <p className="font-medium">By {post.author.name}</p>
          <span>{moment(post.createdAt).format("DD MMM, YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
