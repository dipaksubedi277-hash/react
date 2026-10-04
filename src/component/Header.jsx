import { Link } from "react-router";
import logo from "../assets/logo.png";
export default function Header() {
  return <header className="flex items-center gap-3 justify-between bg-white py-5 px-10 hover:shadow-lg transition-shadow">
    <h3 className="text-2xl font-bold"><div>
        <img
          src={logo}
          alt="Logo"
          className="w-15 h-15 object-contain"
        />
      </div></h3>
    <nav className="flex gap-5">
  <Link className="hover:text-green-500 transition-colors" to="/">
    Home
  </Link>

  <Link className="hover:text-green-500 transition-colors" to="/about">
    About
  </Link>

  <Link className="hover:text-green-500 transition-colors" to="/services">
    Services
  </Link>

  <Link className="hover:text-green-500 transition-colors" to="/works">
    Works
  </Link>

  <Link className="hover:text-green-500 transition-colors" to="/blog">
    Blog
  </Link>

  <Link className="hover:text-green-500 transition-colors" to="/contact">
    Contact
  </Link>
</nav>
    <div className="buttons flex gap-3 ">
      <button>Login</button>
      <button><Link to="/register">Register</Link></button>
    </div>
  </header>
}