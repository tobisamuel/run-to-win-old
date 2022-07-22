import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";

const links = [
  { title: "About", path: "/about" },
  { title: "Programs", path: "/programs" },
  { title: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);
  const router = useRouter();

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
            <Link key={link.title} href={link.path}>
              <a>{link.title}</a>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen mx-auto flex flex-col justify-between items-center bg-white transform delay-100 transition-all duration-300 ease-in-out z-50 ${
          navOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:hidden`}
      >
        {/* Button */}
        <div
          className="container mt-10 flex justify-end text-2xl text-fuchsia-600"
          onClick={toggleNav}
        >
          <FaTimes />
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-6">
          <ul>
            {links.map((link) => (
              <li
                key={link.title}
                className="p-2 text-2xl text-fuchsia-600 font-bold hover:text-fuchsia-800"
                onClick={toggleNav}
              >
                <Link href={link.path}>
                  <a>{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
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
