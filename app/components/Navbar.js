import Link from "next/link"
import {
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaLaptop,
} from "react-icons/fa"
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 p-4 bg-slate-600 drop-shadow-xl">
      <div className="flex flex-col justify-between mx-auto prose prose-xl sm:flex-row">
        <h1 className="grid mb-2 text-3xl font-bold text-white place-content-center md:mb-0">
          <Link
            href="/"
            className="no-underline text-white/90 hover:text-white"
          >
            Boggy Patch
          </Link>
        </h1>
        <div className="flex flex-row justify-center gap-4 text-4xl text-white align-middle sm:justify-evenly lg:text-5xl">
          <Link
            href="/"
            className="text-white/70 hover:text-white"
          >
            <FaLaptop />
          </Link>
          <Link
            href="/"
            className="text-white/70 hover:text-white"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://youtu.be/puIQhnjOfbc"
            className="text-cyan-500 hover:text-white"
          >
            <FaYoutube />
          </Link>
          <Link
            href="/"
            className="text-white/70 hover:text-white"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  )
}
