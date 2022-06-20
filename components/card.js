import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Card = ({ details }) => {
  const { title, description, price, href, features } = details;
  return (
    <div className="w-auto bg-gray-200 rounded-md overflow-hidden md:w-1/2">
      <div className="p-6">
        <h4 className="text-lg text-left text-fuchsia-700 font-bold">
          {title}
        </h4>

        <p className="text-md text-left my-3">{description}</p>
        <h4 className="text-2xl text-left text-amber-500 font-normal">
          &#8358;{price}
        </h4>
        <div className="flex my-4">
          <Link href={href}>
            <a className="px-5 py-2 rounded-md w-full inline-block text-center bg-fuchsia-600 font-medium text-white hover:bg-fuchsia-700">
              Join Now
            </a>
          </Link>
        </div>
        <ul>
          {features.map((feature, i) => (
            <li key={i} className="flex text-sm space-y-1">
              <FaCheck className="text-amber-500 shrink-0 mt-2" />
              <span className="ml-1 text-left leading-5">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
