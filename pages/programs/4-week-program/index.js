import { Card, Layout } from "../../../components";

const details = {
  title: "4-week Starter Program",
  description:
    "A 4-week starter program on fitness and wellness. Learn how to build habits that would ensure sustainable fitness and ultimately become the best version of you.",
  price: "5,000",
  href: "/programs/4-week-program/register",
  features: [
    "At home strength training workout videos",
    "Cardio Plan for non-strength days",
    "Daily Scriptures / Motivational Quotes",
    "Guides to healthy eating",
    "Weekly Planner for busy women",
  ],
};

const Index = () => {
  return (
    <Layout>
      <section>
        <div className="max-w-4xl mt-6 mx-auto px-10 text-center">
          <h2 className="text-fuchsia-600 text-2xl text-center font-extrabold">
            Run2Win 4-week Starter Program
          </h2>
          <div className="flex flex-col justify-center mt-5 space-y-8 md:flex-row md:space-x-5">
            <Card details={details} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
