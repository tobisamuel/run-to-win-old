import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NoExcuse() {
  return (
    <>
      <section className="bg-book2">
        <div className="mx-auto px-4 pt-24 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-0 lg:pt-48 lg:pb-48">
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
                  href="#"
                  className="border-2 border-book py-2 px-6 font-semibold text-book focus:outline-none focus:ring-2 focus:ring-book2 focus:ring-offset-2 focus:ring-offset-book2"
                >
                  Learn More
                </a>

                <a
                  href="https://selar.co/b332"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="bg-book py-2 px-6 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-book2 focus:ring-offset-2 focus:ring-offset-book2"
                >
                  Buy the book
                </a>
              </div>
            </div>

            <div className="relative mt-4 flex flex-col items-center lg:mt-0 lg:w-[700px]">
              <div className="relative aspect-[360/509] w-3/4 shadow-2xl sm:w-96 lg:absolute lg:-top-12 lg:right-0 lg:h-[495px] lg:w-[350px] lg:rotate-6">
                <Image
                  src="/images/book.jpeg"
                  alt="No excuse guide"
                  layout="fill"
                  priority
                  className="object-fill"
                />
              </div>

              <div className="relative mt-16 flex flex-col gap-2 sm:flex-row sm:justify-center lg:hidden">
                <a
                  href="#"
                  className="border-2 border-book py-2 px-6 font-semibold text-book focus:outline-none focus:ring-2 focus:ring-book2 focus:ring-offset-2 focus:ring-offset-book2"
                >
                  Learn More
                </a>

                <a
                  href="https://selar.co/b332"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="bg-book py-2 px-6 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-book2 focus:ring-offset-2 focus:ring-offset-book2"
                >
                  Buy the book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-book">
        <div className="mx-auto max-w-4xl px-16">
          <div className="py-32">
            <h1 className="text-center text-6xl font-bold text-book2">
              Through what lens are you looking at fitness?
            </h1>

            <div className="mt-16 space-y-4 text-lg text-book2">
              <p>
                At age 13, I was diagnosed with anorexia nervosa due to
                unhealthy eating patterns and a compulsive quest to lose weight.
                I struggled to maintain a healthy weight all through my teenage
                years without success.
              </p>

              <p></p>

              <p>
                In the book, &quot;The No-Excuse Guide to a Fit, Strong and
                Healthy You&quot; Robo Joan shares tips on the transformative
                lifestyle that changed the trajectory of her life. At 40 she
                decided to embrace who God made her, including her body-which is
                a priceless gift from God! Her decade-old fitness journey and
                how she evolved from being the girl who always wanted the looks
                of the girl on the other side of the track to be a fit, strong
                and more confident 50-year-old fitness and wellness advocate is
                a must-read!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-book2">
        <div className="px-16 py-32">
          <h1 className="text-6xl font-bold text-book">
            What people are saying...
          </h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </section>
    </>
  );
}
