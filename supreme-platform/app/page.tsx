import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cars } from "@/lib/cars";

export default function HomePage() {
  return <main>
    <Header />
    <section className="hero">
      <Image className="hero-image" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=90" alt="Voiture sportive" fill priority sizes="100vw"/>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <p className="eyebrow"><span/> L'AUTOMOBILE, SANS COMPROMIS</p>
        <h1>DRIVE<br/><em>BEYOND</em><br/>LIMITS<span>.</span></h1>
        <p className="hero-copy">La performance n'est pas une destination.<br/>C'est une manière d'avancer.</p>
        <Link className="primary-button" href="/catalogue">Explorer la collection <ArrowUpRight size={18}/></Link>
      </div>
      <div className="hero-foot"><span>CONÇU POUR CEUX QUI AVANCENT</span><span>LUBUMBASHI · RDC</span></div>
    </section>
    <section className="intro section">
      <p className="section-label">01 / NOTRE VISION</p>
      <div className="intro-grid"><h2>PLUS QU'UNE<br/>VOITURE. <em>UNE<br/>ATTITUDE.</em></h2><div><p className="lead">Une plateforme automobile construite autour du caractère, du mouvement et de l'ambition.</p><p className="muted">Découvrez une sélection de véhicules, explorez leurs univers et retrouvez progressivement des outils dédiés aux passionnés et aux professionnels de l'automobile.</p></div></div>
    </section>
    <section className="collection section">
      <div className="section-heading"><div><p className="section-label">02 / LA COLLECTION</p><h2>CHOISIES POUR<br/><em>LEUR CARACTÈRE.</em></h2></div><Link className="text-link" href="/catalogue">Tout le catalogue <MoveRight size={17}/></Link></div>
      <div className="car-grid">{cars.map((car,index)=><Link className="car-card" href={`/vehicules/${car.slug}`} key={car.slug}>
        <div className="car-photo"><Image src={car.image} alt={car.name} fill sizes="(max-width: 800px) 100vw, 33vw"/><span className="car-tag">CONCEPT · 0{index+1}</span><span className="card-arrow"><ArrowUpRight size={20}/></span></div>
        <div className="car-info"><div><h3>{car.name}</h3><p>{car.category}</p></div><span>0{index+1}</span></div>
      </Link>)}</div>
    </section>
    <section className="manifesto"><p className="eyebrow"><span/> NOTRE MANIFESTE</p><h2>LE MOUVEMENT<br/>N'ATTEND <em>PERSONNE.</em></h2><p>Tracez votre route. Affirmez votre style.<br/>Le prochain chapitre vous appartient.</p></section>
    <Footer/>
  </main>;
}
