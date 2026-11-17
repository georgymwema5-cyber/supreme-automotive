import Link from "next/link";

export default function NotFound() {
  return <main className="section"><p className="section-label">ERREUR 404</p><h1 className="page-title">PAGE <em>INTROUVABLE.</em></h1><Link className="primary-button" href="/">Retour à l'accueil</Link></main>;
}
