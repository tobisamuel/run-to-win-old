import Image from "next/image";
import { Layout } from "../components";
import { values } from "../services/info";

const AboutPage = () => {
  const meta = {
    title: "About | Run2Win Fitness",
  };

  return (
    <Layout pageMeta={meta}>
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col items-center mt-12 mx-auto md:flex-row">
          {/* left side */}
          <div className="basis-1/2 flex flex-col space-y-4 mb-3 text-center md:text-left">
            <h2 className="text-4xl font-extrabold uppercase text-fuchsia-600">
              Becoming the best version of yourself
            </h2>
            <p className="text-base text-rtw-4">
              At Run2Win, we believe that fitness is much more than the number
              on the scale. It is not about perfection but consistency; It is
              not about being skinny but about being fit, healthy, strong and
              ultimately the best version of yourself.
            </p>
          </div>

          {/* right side */}
          <div className="basis-1/2">
            <Image src="/images/hero.png" width={600} height={428} alt="" />
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="mx-auto">
            <h2 className="text-2xl text-center text-fuchsia-600 font-extrabold leading-8 tracking-wide uppercase">
              OUR VALUES
            </h2>

            <div className="flex flex-col justify-center mt-5 mx-auto space-y-3 lg:mt-7 lg:flex-row lg:space-y-0 lg:space-x-4">
              {values.map((value, i) => (
                <div className="lg:flex-1" key={i}>
                  <h4 className="mb-1 font-bold text-xl text-fuchsia-600">
                    {value.name}
                  </h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder section */}
        <div className="flex flex-col-reverse items-center mx-auto md:flex-row">
          {/* left side */}
          <div className="basis-1/2 flex justify-center mt-3 md:mt-0">
            <Image
              src="/images/profile.png"
              width={350}
              height={377}
              alt="picture of robo joan"
            />
          </div>

          {/* right side */}
          <div className="basis-1/2 flex flex-col space-y-4 text-center md:text-left">
            <h1 className="font-bold text-2xl text-fuchsia-600">About Robo</h1>
            <p className="text-base text-rtw-4">
              Robo is a Fitness Trainer and Enthusiast, non-profit Management
              Consultant, Writer and Motivational Speaker. As a Fitness trainer
              and enthusiast, an important aspect of her work and passion is to
              help women achieve sustainable Fitness and Wellness and become the
              best version of themselves. She believes Fitness and wellness is
              not just about the number on the scale but encompasses fitness of
              our spirit, soul and body. This conviction led to the birth of
              Run2Win Fitness and Wellness - an organisation that helps
              individuals and organisations build habits for sustainable Fitness
              and Wellness. She is mother to two young adults, aged 23 and 21.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
