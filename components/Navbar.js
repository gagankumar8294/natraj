import Link from "next/link";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/cars">Cars</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
