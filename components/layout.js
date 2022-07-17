import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
import { useRouter } from "next/router";

export default function Layout({ children, pageMeta }) {
  const router = useRouter();

  const meta = {
    title: "Run2Win Fitness",
    description:
      "Run2Win Fitness and Wellness is an organisation that work with individuals and organisations in building habits for sustainable Fitness and Wellness through regular physical exercise and proper nutrition.",
    type: "website",
    image: "https://run2winfitness.com/images/logo.png",
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:url"
          content={`https://run2winfitness.com${router.asPath}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}
