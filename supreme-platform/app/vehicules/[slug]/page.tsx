import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cars } from "@/lib/cars";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);
  if (!car) notFound();

  return <main><Header/><section className="section vehicle-page">
    <Link className="back-link" href="/catalogue">← RETOUR AU CATALOGUE</Link>
    <div className="vehicle-hero"><Image src={car.image} alt={car.name} fill sizes="100vw" priority/></div>
    <p className="section-label">SUPRÊME AUTOMOTIVE / COLLECTION</p>
    <h1 className="page-title">{car.name}</h1>
    <p className="lead">{car.tagline}</p><p className="muted">{car.description}</p>
    <p className="demo-warning">MODÈLE CONCEPTUEL — caractéristiques, prix et disponibilité non renseignés.</p>
    <Link className="primary-button" href="/contact">Demander des informations</Link>
  </section><Footer/></main>;
}
