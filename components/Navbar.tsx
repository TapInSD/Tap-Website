import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold tracking-wide">TAP</Link>
      <ul className="flex gap-4">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/features">Why TAP</Link></li>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}