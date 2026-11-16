import Link from "next/link";

export default function Footer() {
  return <footer className="footer">
    <Link className="brand" href="/"><span className="brand-mark">S</span><span>SUPRÊME<small>AUTOMOTIVE</small></span></Link>
    <p>PERFORMANCE IS A STATE OF MIND.</p>
    <span>© 2026 SUPRÊME AUTOMOTIVE</span>
  </footer>;
}
