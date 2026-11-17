import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cars } from "@/lib/cars";

export default function CataloguePage() {
  return <main><Header/><section className="page-intro section"><p className="section-label">COLLECTION / SUPRÊME</p><h1 className="page-title">THE <em>LINEUP.</em></h1><p className="lead">Des silhouettes qui imposent leur présence.</p>
    <div className="car-grid catalogue-grid">{cars.map((car,index)=><Link className="car-card" href={`/vehicules/${car.slug}`} key={car.slug}>
      <div className="car-photo"><Image src={car.image} alt={car.name} fill sizes="(max-width: 800px) 100vw, 50vw"/><span className="car-tag">CONCEPT · 0{index+1}</span><span className="card-arrow"><ArrowUpRight size={20}/></span></div>
      <div className="car-info"><div><h3>{car.name}</h3><p>{car.category}</p></div><span>0{index+1}</span></div>
    </Link>)}</div>
    <p className="muted">Les modèles présentés sont des concepts de démonstration, pas des annonces de véhicules disponibles.</p>
  </section><Footer/></main>;
}
