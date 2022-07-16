import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const FeaturedPostCard = ({ post }) => {
  const { author, createdAt, excerpt, featuredImage, slug, title } = post;
  return (
    <div className="flex flex-col md:flex-row">
      {/* left */}
      <div className="h-48 relative overflow-hidden shadow-md rounded-lg hover:bg-gray-100 md:w-9/12 md:h-96">
        <Image
          src={featuredImage.url}
          alt="picture"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* right */}
      <div className="flex flex-col justify-evenly mt-3 space-y-31 md:w-3/12 md:mt-0 md:ml-6">
        <h1 className="text-xl font-semibold text-fuchsia-600 md:text-4xl md:font-bold cursor-pointer hover:text-fuchsia-800 transition duration-700">
          <Link href={`/blog/posts/${slug}`}>{title}</Link>
        </h1>
        <p className="md:text-lg">{excerpt}</p>

        <div className="text-sm md:text-base">
          <p className="font-medium">By {author.name}</p>
          <span className="">{moment(createdAt).format("DD MMM, YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
