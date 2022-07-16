import Layout from "../../components/layout";
import Card from "../../components/card";

const details = {
  title: "30-day Endurance Challenge",
  description:
    "Build cardiovascular strength, endurance and mental toughness in the 30-day challenge.",
  price: "3,000",
  href: "/programs/endurance-challenge/register",
  features: [
    "Free webinar on Mental Toughness",
    "Weekly no equipment bodyweight workout routine you can do anywhere (indoor or outdoor)",
    "Daily endurance quotes to build mental toughness and keep you motivated",
    "Healthy Nutrition Tips + Accountability",
  ],
};

const Index = () => {
  return (
    <Layout>
      <section>
        <div className="max-w-4xl mt-6 mx-auto px-10 text-center">
          <h2 className="text-fuchsia-600 text-2xl text-center font-extrabold">
            Run2Win 30-day Endurance Challenge
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
