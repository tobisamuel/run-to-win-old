import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";

export default function Layout({ children }) {
  const [show, setShow] = useState(false);
  const toggleNav = () => setShow(!show);

  return (
    <div>
      <Head>
        <title>Run to Win Fitness</title>
        <meta
          name="description"
          content="Run2Win Fitness and Wellness is a transformational, revolutionary, holistic Fitness and Wellness program specifically designed for Christian Women who desire Fitness and Wellness of their spirit, soul and body"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="relative mx-auto px-10 py-8 shadow-sm md:px-16">
        <div className="flex items-center justify-between ">
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={130}
                height={33}
                alt="logo"
              />
            </a>
          </Link>

          {/* Hamburger Icon*/}
          <div
            className="text-xl  text-fuchsia-600 md:hidden"
            onClick={toggleNav}
          >
            {show ? <FaTimes /> : <FaBars />}
          </div>

          {/* NavLinks */}
          <div className="hidden font-bold text-fuchsia-600 space-x-5 md:flex">
            <Link href="/">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>Programs</a>
            </Link>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {show ? (
            <div className="absolute flex flex-col items-center self-end w-11/12 left-0 right-0 top-20 mx-auto mt-10 py-8 px-6 space-y-6 z-50 bg-white text-fuchsia-600 font-bold drop-shadow-md sm:self-center">
              <Link href="/">
                <a>About</a>
              </Link>
              <Link href="/">
                <a>Programs</a>
              </Link>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <div>
          <div className="flex justify-center text-fuchsia-500 font-bold space-x-5 mt-10">
            <Link href="/">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>Programs</a>
            </Link>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </div>

          <div className="flex justify-center p-5 text-fuchsia-600 text-2xl space-x-6">
            <a href="https://facebook.com/run2winfitness">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/runtowinfitness/">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCe-vpacqipk4VR8jlPGCbNA">
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
