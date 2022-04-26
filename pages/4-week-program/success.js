import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Success = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-96">
        <span className="text-fuchsia-600 text-xl font-semibold">
          Payment Successful!
        </span>
        <span className="text-fuchsia-600 text-sm font-semibold">
          Your payment reference is {router.query.ref}
        </span>
        <span className="mt-1 text-xs text-fuchsia-600">
          You will be added to the Run2Win WhatsApp Group Chat
        </span>
      </div>
    </Layout>
  );
};

export default Success;
