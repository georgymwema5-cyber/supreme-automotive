import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdministrationPage() {
  return <main><Header/><section className="section admin-page">
    <p className="section-label">ESPACE DE GESTION</p><h1 className="page-title">ADMIN <em>PREVIEW.</em></h1>
    <p className="lead">La future console de gestion SUPRÊME.</p>
    <div className="admin-notice"><strong>Mode aperçu uniquement</strong><p>Cette page n'est pas encore protégée par une authentification. Ne l'utilise pas pour gérer de vraies annonces ni des informations privées.</p></div>
    <div className="admin-stats"><article><span>VÉHICULES DÉMO</span><strong>03</strong></article><article><span>COMPTES UTILISATEURS</span><strong>—</strong></article><article><span>ANNONCES ACTIVES</span><strong>00</strong></article></div>
    <p className="muted">Prochaine étape technique : connecter Supabase, créer les rôles administrateur/utilisateur et protéger les opérations côté serveur.</p>
  </section><Footer/></main>;
}
