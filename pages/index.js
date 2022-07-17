import Link from "next/link";
import Image from "next/image";
import { Card, Layout } from "../components";
import { cardInfo } from "../services/info";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto space-y-12">
        {/* Main Section */}
        <section className="mt-12">
          <div className="flex flex-col-reverse items-center md:flex-row md:items-start">
            {/* left side */}
            <div className="basis-1/2 flex flex-col mb-3 py-6 space-y-4 text-center md:text-left">
              <h1 className="text-3xl font-extrabold uppercase text-fuchsia-600 md:text-4xl lg:text-5xl">
                Building habits for sustainable fitness and wellness
              </h1>
              <p className="text-md text-rtw-4 md:text-lg lg:text-xl">
                We work with individuals and organizations in building habits
                for sustainable Fitness and Wellness through regular physical
                exercise and proper nutrition.
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
              <Image
                src="/images/section.png"
                width={600}
                height={400}
                alt="Picture of woman running"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section>
          <div className="flex flex-col justify-between items-center md:flex-row">
            {/* left side */}
            <div className="flex-1">
              <Image
                src="/images/hero.png"
                width={600}
                height={428}
                alt="Picture of woman holding weights"
              />
            </div>

            {/* right side */}
            <div className="flex-1 flex flex-col space-y-4 my-12 text-center md:my-0 md:text-left">
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-fuchsia-600 text-2xl text-center font-extrabold">
              Our Programs
            </h2>
            <h4 className="mt-2">
              Run2Win Fitness provides programs for individuals and groups
            </h4>

            {/* Cards Container */}
            <div className="flex flex-col justify-center mt-10 space-y-8 md:flex-row md:space-x-5 md:space-y-0">
              {cardInfo.map((detail, i) => (
                <Card details={detail} key={i} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section>
        <div className="flex flex-col justify-between items-center bg-fuchsia-600 mt-12 px-10 py-24 lg:flex-row">
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
