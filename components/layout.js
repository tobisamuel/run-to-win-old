import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Run to Win Fitness</title>
        <meta
          name="description"
          content="Run2Win Fitness and Wellness is an organisation that work with individuals and organisations in building habits for sustainable Fitness and Wellness through regular physical exercise and proper nutrition."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
