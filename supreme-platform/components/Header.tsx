import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="topline"><span>SUPRÊME AUTOMOTIVE</span><span>PERFORMANCE · DESIGN · EXCELLENCE</span></div>
      <header className="header">
        <Link className="brand" href="/"><span className="brand-mark">S</span><span>SUPRÊME<small>AUTOMOTIVE</small></span></Link>
        <nav><Link href="/">Accueil</Link><Link href="/catalogue">Véhicules</Link><Link href="/administration">Administration</Link></nav>
        <Link className="header-cta" href="/contact">Contact <ArrowUpRight size={16}/></Link>
      </header>
    </>
  );
}
