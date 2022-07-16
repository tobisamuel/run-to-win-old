import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const links = [
  { title: "About", href: "/about" },
  { title: "Programs", href: "/programs" },
  { title: "Blog", href: "/blog" },
];

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center text-fuchsia-500 font-bold space-x-5 mt-10">
        {links.map((link) => (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>

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
    </footer>
  );
};

export default Footer;
