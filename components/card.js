import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const content = [
  "At home strength training workout videos",
  "Cardio Plan for non-strength days",
  "Daily Scriptures / Motivational Quotes",
  "Guides to healthy eating",
  "Weekly Planner for busy women",
];

const Card = () => {
  return (
    <div className="w-auto bg-gray-200 rounded-md overflow-hidden md:w-1/2">
      <div className="p-6">
        <h4 className="text-lg text-left text-fuchsia-800 font-bold">
          4-week Starter Program
        </h4>

        <p className="text-sm text-left my-3">
          A 4-week starter program on fitness and wellness. Learn how to build
          habits that would ensure sustainable fitness and ultimately become the
          best version of you.
        </p>
        <h4 className="text-2xl text-left text-amber-500 font-normal">
          &#8358;5,000
        </h4>
        <div className="flex my-4">
          <Link href="/4-week-program">
            <a className="px-5 py-2 rounded-md w-full inline-block text-center bg-fuchsia-600 font-medium text-white hover:bg-fuchsia-700">
              Join Now
            </a>
          </Link>
        </div>
        <ul>
          {content.map((item, i) => (
            <li key={i} className="flex items-center text-sm">
              <FaCheck className="text-amber-500 shrink-0" />
              <span className="ml-1 text-left ">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
