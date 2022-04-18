import Link from "next/link";
import Image from "next/image";
import Card from "../components/card";
import Layout from "../components/layout";

const plans = [{ name: "", price: "", description: "", content: {} }];

export default function Home() {
  return (
    <Layout>
      {/* Main Section */}
      <section>
        <div className=" flex flex-col-reverse items-center mx-auto mt-12 px-16 md:flex-row">
          {/* left side */}
          <div className="flex-1 flex flex-col space-y-4 py-6">
            <h1 className="text-2xl uppercase font-extrabold text-fuchsia-600 text-center md:px-0 md:text-3xl md:text-left">
              A Transformational, Revolutionary and Holistic Fitness and
              Wellness Program designed for Christian Women
            </h1>
            <p className="text-center text-rtw-4 md:text-left">
              A program designed for Christian Women who desire fitness and
              wellness of their spirit, soul and body.
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
          <div className="flex-1">
            <Image src="/images/section.png" width={600} height={400} alt="" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="flex justify-between flex-col items-center mt-16 mx-auto  px-16 md:flex-row">
          {/* left side */}
          <div className="flex-1">
            <Image src="/images/hero.png" width={600} height={428} alt="" />
          </div>

          {/* right side */}
          <div className="flex-1 flex flex-col space-y-4 my-14 text-center md:ml-7 md:text-left">
            <h3 className="text-fuchsia-500 font-semibold">ABOUT US</h3>
            <h2 className="text-3xl font-extrabold uppercase text-fuchsia-600 md:text-2xl ">
              Building habits for sustainable fitness and wellness
            </h2>
            <p className="text-rtw-4">
              At Run2Win, we believe that fitness is much more than the number
              on the scale. It is not about perfection but consistency; It is
              not about being skinny but about being fit, healthy, strong and
              ultimately the best version of yourself.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/">
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
        <div className="max-w-4xl mt-12 mx-auto px-10 text-center">
          <h2 className="text-fuchsia-600 text-2xl text-center font-extrabold">
            Our Programs
          </h2>
          <h4 className="mt-2">
            Run2Win Fitness provides programs for individuals and groups
          </h4>
          {/* Cards Container */}

          <div className="flex flex-col justify-center mt-10 space-y-8 md:flex-row md:space-x-5">
            <Card />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="flex flex-col justify-between items-center bg-fuchsia-600 mx-auto mt-12 px-10 py-24 md:flex-row ">
          <h3 className="font-bold text-xl text-white text-center md:text-2xl md:text-left">
            Begin the journey to becoming the best version of you
          </h3>
          <div>
            <Link href="/">
              <a className="mt-5 px-5 py-2 rounded-md inline-block text-center bg-white font-medium text-fuchsia-600 md:mt-0">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
