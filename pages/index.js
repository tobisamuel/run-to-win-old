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
            <div className="mb-3 flex basis-1/2 flex-col space-y-4 py-6 text-center md:text-left">
              <h1 className="text-3xl font-extrabold uppercase text-fuchsia-600 md:text-4xl lg:text-5xl">
                Building habits for sustainable fitness and wellness
              </h1>
              <p className="text-md text-rtw-4 md:text-lg lg:text-xl">
                We work with individuals and organizations in building habits
                for sustainable Fitness and Wellness through regular physical
                exercise and proper nutrition.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/programs">
                  <a className="inline-block rounded-md bg-fuchsia-600 px-5 py-2 text-center font-medium text-white hover:bg-fuchsia-700">
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
          <div className="flex flex-col items-center justify-between md:flex-row">
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
            <div className="my-12 flex flex-1 flex-col space-y-4 text-center md:my-0 md:text-left">
              <h3 className="font-semibold text-fuchsia-500">ABOUT US</h3>
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
                  <a className="inline-block rounded-md bg-fuchsia-600 px-5 py-2 text-center font-medium text-white hover:bg-fuchsia-700">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-center text-2xl font-extrabold text-fuchsia-600">
              Our Programs
            </h2>
            <h4 className="mt-2">
              Run2Win Fitness provides programs for individuals and groups
            </h4>

            {/* Cards Container */}
            <div className="mt-10 flex flex-col justify-center space-y-8 md:flex-row md:space-x-5 md:space-y-0">
              {cardInfo.map((detail, i) => (
                <Card details={detail} key={i} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Book Section */}
      <section className="bg-book2">
        <div className="mx-auto mt-12 px-4 pt-24 pb-24 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-0 lg:pt-48 lg:pb-48">
          <div className="lg:flex">
            <div className="flex-auto">
              <h1 className="text-center font-yapari text-4xl font-semibold uppercase leading-[1.2] text-book md:text-[4rem] md:leading-[4.75rem] lg:text-left lg:text-5xl">
                Learn the <em>secrets</em> to staying consistent on your fitness
                journey
              </h1>

              <p className="mt-4 max-w-3xl text-center font-gara text-2xl leading-[2.5rem] tracking-tight lg:text-left">
                Define the &apos;Why&apos; of your fitness journey and build
                habits for sustainable fitness and wellness
              </p>

              <div className="mt-4 hidden lg:flex lg:gap-2">
                <a
                  href="https://selar.co/b332"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="bg-book py-2 px-6 font-semibold text-white hover:bg-book/90 focus:outline-none focus:ring-2 focus:ring-book2 focus:ring-offset-2 focus:ring-offset-book2"
                >
                  Buy the book
                </a>

                <Link href="/no-excuse-guide">
                  <a className="mt-2 block border-2 border-book py-2 px-6 font-semibold text-book focus:outline-none focus:ring-2 focus:ring-book2 focus:ring-offset-2 focus:ring-offset-book2 lg:mt-0">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>

            <div className="relative mt-4 flex flex-col items-center lg:mt-0 lg:w-[700px]">
              <div className="relative aspect-[360/509] w-3/4 shadow-2xl sm:w-96 lg:absolute lg:-top-12 lg:right-0 lg:h-[495px] lg:w-[350px] lg:rotate-6">
                <Image
                  src="/images/book.jpeg"
                  alt="No excuse guide"
                  layout="fill"
                  className="object-fill"
                />
              </div>

              <div className="relative mt-16 flex flex-col sm:flex-row sm:justify-center lg:hidden">
                <a
                  href="https://selar.co/b332"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="bg-book py-2 px-6 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-book2 focus:ring-offset-2 focus:ring-offset-book2"
                >
                  Buy the book
                </a>

                <Link href="/no-excuse-guide">
                  <a className="mt-2 block border-2 border-book py-2 px-6 font-semibold text-book focus:outline-none focus:ring-2 focus:ring-book2 focus:ring-offset-2 focus:ring-offset-book2 lg:mt-0">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="flex flex-col items-center justify-between bg-fuchsia-600 px-10 py-24 lg:flex-row">
          <h3 className="text-center text-xl font-bold text-white md:text-left md:text-2xl">
            Begin the journey to becoming the best version of you
          </h3>
          <div>
            <Link href="/programs">
              <a className="mt-5 inline-block rounded-md bg-white px-5 py-2 text-center font-medium text-fuchsia-600 lg:mt-0">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
