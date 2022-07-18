import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const FeaturedPostCard = ({ post }) => {
  const { author, createdAt, excerpt, image, slug, title } = post;
  return (
    <div className="flex flex-col md:flex-row">
      {/* left */}
      <div className="h-48 relative overflow-hidden shadow-md hover:bg-gray-100 md:w-8/12 md:h-[27rem]">
        <Image src={image.url} alt="picture" layout="fill" objectFit="cover" />
      </div>

      {/* right */}
      <div className="flex flex-col justify-center mt-3 space-y-3 md:w-4/12 md:mt-0 md:ml-6">
        <span className="w-fit px-2 py-1 bg-fuchsia-100 text-sm text-fuchsia-700 font-medium rounded-sm">
          Featured
        </span>
        <h1 className="text-xl font-semibold text-fuchsia-600 cursor-pointer hover:text-fuchsia-800 transition duration-300 md:text-4xl md:font-bold">
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
