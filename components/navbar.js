import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";

const links = [
  { title: "About", href: "/about" },
  { title: "Programs", href: "/programs" },
  { title: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggleNav = () => setShow(!show);

  return (
    <nav className="container py-8">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a>
            <Image src="/images/logo.png" width={130} height={33} alt="logo" />
          </a>
        </Link>

        {/* Hamburger Icon*/}
        <div className="text-xl text-fuchsia-600 md:hidden" onClick={toggleNav}>
          <FaBars />
        </div>

        {/* NavLinks */}
        <div className="hidden font-bold text-fuchsia-600 space-x-5 md:flex">
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              <a>{link.title}</a>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-0 h-screen mx-auto flex flex-col justify-between items-center bg-white transform ${
          show ? "" : "-translate-y-full"
        } transition duration-200 ease-in-out z-50 md:hidden`}
      >
        <div
          className="container pt-11 flex justify-end text-2xl text-fuchsia-600"
          onClick={toggleNav}
        >
          <FaTimes />
        </div>
        <div className="flex flex-col space-y-6">
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              <a
                className="text-2xl text-fuchsia-600 font-bold"
                onClick={toggleNav}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center p-5 text-fuchsia-600 text-2xl space-x-6">
          <a href="https://facebook.com/run2winfitness">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/runtowinfitness">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/channel/UCe-vpacqipk4VR8jlPGCbNA">
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
