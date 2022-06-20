import Link from "next/link";
import Image from "next/image";
import Card from "../components/card";
import Layout from "../components/layout";

const cardDetails = [
  {
    title: "4-week Starter Program",
    description:
      "A 4-week starter program on fitness and wellness. Learn how to build habits that would ensure sustainable fitness and ultimately become the best version of you.",
    price: "5,000",
    href: "/4-week-program/register",
    features: [
      "At home strength training workout videos",
      "Cardio Plan for non-strength days",
      "Daily Scriptures / Motivational Quotes",
      "Guides to healthy eating",
      "Weekly Planner for busy women",
    ],
  },
  {
    title: "30-day Endurance Challenge",
    description:
      "Build cardiovascular strength, endurance and mental toughness in the 30-day challenge.",
    price: "3,000",
    href: "/endurance-challenge/register",
    features: [
      "Free webinar on Mental Toughness",
      "Weekly no equipment bodyweight workout routine you can do anywhere (indoor or outdoor)",
      "Daily endurance quotes to build mental toughness and keep you motivated",
      "Healthy Nutrition Tips + Accountability",
    ],
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Main Section */}
      <section>
        <div className="flex flex-col-reverse items-center mt-12 mx-auto px-10 md:px-16 md:flex-row md:items-start">
          {/* left side */}
          <div className="basis-1/2 flex flex-col mb-3 py-6 space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-extrabold uppercase text-fuchsia-600 md:text-4xl lg:text-5xl">
              Building habits for sustainable fitness and wellness
            </h1>
            <p className="text-md text-rtw-4 md:text-lg lg:text-xl">
              We work with individuals and organizations in building habits for
              sustainable Fitness and Wellness through regular physical exercise
              and proper nutrition.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/">
                <a className="px-5 py-2 rounded-md inline-block text-center bg-fuchsia-600 font-medium text-white hover:bg-fuchsia-700">
                  Get Started
                </a>
              </Link>
            </div>
          </div>

          {/* right side */}
          <div className="basis-1/2">
            <Image src="/images/section.png" width={600} height={400} alt="" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="flex justify-between flex-col items-center mt-12 mx-auto px-10 md:flex-row md:px-16">
          {/* left side */}
          <div className="flex-1">
            <Image src="/images/hero.png" width={600} height={428} alt="" />
          </div>

          {/* right side */}
          <div className="flex-1 flex flex-col space-y-4 my-14 text-center md:my-0 md:text-left">
            <h3 className="text-fuchsia-500 font-semibold">ABOUT US</h3>
            <h2 className="text-2xl font-extrabold uppercase text-fuchsia-600 md:text-3xl">
              Becoming the best version of yourself
            </h2>
            <p className="text-rtw-4 lg:text-lg">
              At Run2Win, we believe that fitness is much more than the number
              on the scale. It is not about perfection but consistency; It is
              not about being skinny but about being fit, healthy, strong and
              ultimately the best version of yourself.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/about">
                <a className="px-5 py-2 rounded-md inline-block text-center bg-fuchsia-600 font-medium text-white hover:bg-fuchsia-700">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section>
        <div className="max-w-4xl mt-12 mx-auto px-10 text-center md:px-16">
          <h2 className="text-fuchsia-600 text-2xl text-center font-extrabold">
            Our Programs
          </h2>
          <h4 className="mt-2">
            Run2Win Fitness provides programs for individuals and groups
          </h4>
          {/* Cards Container */}

          <div className="flex flex-col justify-center mt-10 space-y-8 md:flex-row md:space-x-5 md:space-y-0">
            {cardDetails.map((detail, i) => (
              <Card details={detail} key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="flex flex-col justify-between items-center bg-fuchsia-600 mx-auto mt-12 px-10 py-24 lg:flex-row md:px-16">
          <h3 className="font-bold text-xl text-white text-center md:text-2xl md:text-left">
            Begin the journey to becoming the best version of you
          </h3>
          <div>
            <Link href="/">
              <a className="mt-5 px-5 py-2 rounded-md inline-block text-center bg-white font-medium text-fuchsia-600 lg:mt-0">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
