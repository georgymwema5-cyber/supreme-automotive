import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return <main><Header/><section className="section contact-page">
    <p className="section-label">PRENONS CONTACT</p><h1 className="page-title">LET'S <em>TALK.</em></h1>
    <p className="lead">Une question, un véhicule en tête ou une idée à partager ?</p>
    <a className="primary-button" href="mailto:contact@supreme-automotive.com?subject=Contact%20SUPR%C3%8AME%20AUTOMOTIVE">Préparer un e-mail</a>
    <p className="muted">L'adresse e-mail est provisoire et devra être remplacée par une adresse officielle vérifiée.</p>
  </section><Footer/></main>;
}
