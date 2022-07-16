import Image from "next/image";
import Layout from "../components/layout";

const values = [
  {
    name: "Consistency",
    description: `At Run2Win, we believe Consistency is the game changer and one of the most important elements in achieving our fitness goals. We are creatures of habit so the more we practice, the more natural it becomes.`,
  },
  {
    name: "Focus",
    description: `Life is full of distractions. Our ability to focus on the most important things of life without distractions is what makes the difference. At Run2Win, we ask our clients to identify the most important things of their lives and give them laser focus.`,
  },
  {
    name: "Discipline",
    description: `Discipline is foundationally important to achieving our life's goals and is therefore a critical factor for achieving our fitness goals. Discipline keeps us going and on track.`,
  },
  {
    name: "Perseverance",
    description: `The journey to Fitness and Wellness is a marathon NOT a sprint. Winning a marathon and getting to the finish line is for those with endurance; a never give up attitude; staying steady and resolute to the finish line.`,
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <div className="px-10 md:px-24 space-y-12">
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
        <div className="">
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
