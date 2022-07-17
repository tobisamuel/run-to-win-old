import Image from "next/image";
import Link from "next/link";
import { Card, Layout } from "../../components";
import { cardInfo } from "../../services/info";

const Programs = () => {
  const meta = {
    title: "Programs | Run2Win Fitness",
  };

  return (
    <Layout pageMeta={meta}>
      <div className="container mx-auto space-y-12">
        <section className="mt-12">
          <div className="flex flex-col-reverse items-center md:flex-row md:items-start">
            {/* left side */}
            <div className="basis-1/2 flex flex-col mb-3 py-6 space-y-4 text-center md:text-left">
              <h1 className="text-3xl font-extrabold uppercase text-fuchsia-600 md:text-4xl lg:text-5xl">
                Begin your fitness journey today!
              </h1>
              <p className="text-md text-rtw-4 md:text-lg lg:text-xl">
                At Run2Win, we have different programs to help you kick-start
                your journey to a fit, stronger and healthier you.
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
            <div className="basis-1/2 flex justify-center">
              <Image
                src="/images/program.png"
                width={429}
                height={600}
                alt="Picture of woman tieing her shoelace"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col justify-between items-center md:flex-row">
            {/* left side */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/starter.png"
                width={401}
                height={600}
                alt="Picture of woman holding weights"
              />
            </div>

            {/* right side */}
            <div className="flex-1 flex flex-col space-y-4 my-12 text-center md:my-0 md:text-left">
              <h2 className="text-2xl font-extrabold uppercase text-fuchsia-600 md:text-3xl">
                4-week Starter program
              </h2>
              <p className="text-rtw-4 lg:text-lg">
                Improve your strength, increase energy levels and focus, learn
                how to build habits that would ensure sustainable fitness and
                ultimately become the best version of you.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/programs/4-week-program">
                  <a className="px-5 py-2 rounded-md inline-block text-center bg-fuchsia-600 font-medium text-white hover:bg-fuchsia-700">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col justify-between items-center md:flex-row-reverse">
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
              <h2 className="text-2xl font-extrabold uppercase text-fuchsia-600 md:text-3xl">
                30 Day Endurance Challenge
              </h2>
              <p className="text-rtw-4 lg:text-lg">
                Build cardiovascular strength, endurance and mental toughness in
                the 30-day challenge.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/programs/endurance-challenge">
                  <a className="px-5 py-2 rounded-md inline-block text-center bg-fuchsia-600 font-medium text-white hover:bg-fuchsia-700">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Programs;
