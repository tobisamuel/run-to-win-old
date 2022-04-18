import Layout from "../../components/layout";
import Card from "../../components/card-2";

const Index = () => {
  return (
    <Layout>
      <section>
        <div className="max-w-4xl mt-6 mx-auto px-10 text-center">
          <h2 className="text-fuchsia-600 text-2xl text-center font-extrabold">
            Run2Win 4-week Starter Program
          </h2>
          <div className="flex flex-col justify-center mt-5 space-y-8 md:flex-row md:space-x-5">
            <Card />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
