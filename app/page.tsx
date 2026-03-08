const APP_URL = "https://app.fellah.tn";

const REGIONS = [
  "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan",
  "Bizerte", "Béja", "Jendouba", "Kef", "Siliana", "Sousse",
  "Monastir", "Mahdia", "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid",
  "Gabès", "Medenine", "Tataouine", "Gafsa", "Tozeur", "Kébili",
];

const FEATURES = [
  {
    icon: "🌾",
    title: "Prix du Marché en Temps Réel",
    desc: "Consultez les prix de gros pour 8 types de cultures. Arrêtez de vendre à l'aveugle aux intermédiaires.",
  },
  {
    icon: "🔬",
    title: "Diagnostic IA des Cultures",
    desc: "Photographiez votre récolte. L'IA identifie les maladies et vous donne un plan de traitement en arabe ou français.",
  },
  {
    icon: "🛒",
    title: "Marché Direct",
    desc: "Publiez vos annonces, recevez des appels directs des acheteurs. Zéro commission. Contact par téléphone ou WhatsApp.",
  },
  {
    icon: "💬",
    title: "Conseiller IA Agricole",
    desc: "Posez vos questions en arabe ou français. L'IA répond avec des conseils adaptés aux conditions tunisiennes.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Créez votre compte",
    desc: "Inscription gratuite en 2 minutes. Renseignez votre région et vos cultures.",
  },
  {
    num: "2",
    title: "Gérez votre ferme",
    desc: "Ajoutez vos parcelles, suivez vos récoltes, consultez les prix du marché.",
  },
  {
    num: "3",
    title: "Vendez directement",
    desc: "Publiez vos produits sur le marché. Les acheteurs vous contactent directement.",
  },
];

const PLANS = [
  {
    name: "Gratuit",
    price: "0",
    unit: "TND",
    highlight: false,
    features: [
      "5 scans IA / jour",
      "3 annonces actives",
      "Prix du marché",
      "Conseiller IA (limité)",
    ],
    cta: "Commencer gratuitement",
    href: `${APP_URL}/register`,
  },
  {
    name: "Pro",
    price: "79",
    unit: "TND / mois",
    highlight: true,
    features: [
      "Scans IA illimités",
      "Annonces illimitées",
      "Conseiller IA complet",
      "Accès prioritaire",
      "Support WhatsApp",
    ],
    cta: "Choisir Pro",
    href: `${APP_URL}/upgrade`,
  },
  {
    name: "Coopérative",
    price: "149",
    unit: "TND / mois",
    highlight: false,
    features: [
      "Multi-membres",
      "Analytics avancés",
      "Annonces groupées",
      "Badge GICAT",
      "Gestionnaire dédié",
    ],
    cta: "Contacter l'équipe",
    href: `${APP_URL}/upgrade`,
  },
];

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-green-600">
          <span>🌿</span>
          <span>Fellah</span>
        </a>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <a
            href={`${APP_URL}/login`}
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
          >
            Se connecter
          </a>
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            Commencer gratuitement
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-green-50 py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-green-700 bg-green-100 rounded-full">
          🇹🇳 Plateforme agri-tech #1 en Tunisie
        </div>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
          dir="rtl"
          lang="ar"
        >
          فلاحتك أذكى مع الذكاء الاصطناعي
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          La plateforme tout-en-un pour les agriculteurs tunisiens —<br className="hidden sm:block" />
          prix en temps réel, diagnostic IA, marché direct.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors shadow-md"
          >
            Commencer gratuitement →
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-green-700 border-2 border-green-600 rounded-xl hover:bg-green-50 transition-colors"
          >
            Voir la démo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ───────────────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: "530 000", label: "agriculteurs en Tunisie" },
    { value: "24", label: "gouvernorats couverts" },
    { value: "3", label: "langues (AR / FR / EN)" },
  ];
  return (
    <section className="bg-green-500 py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-extrabold">{s.value}</p>
            <p className="text-sm mt-1 opacity-90">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Features ────────────────────────────────────────────────────────────── */
function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Tout ce dont vous avez besoin
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Une seule application pour gérer, diagnostiquer, et vendre.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ────────────────────────────────────────────────────────── */
function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Comment ça marche ?
        </h2>
        <p className="text-center text-gray-500 mb-12">Opérationnel en moins de 5 minutes.</p>
        <div className="flex flex-col md:flex-row gap-8 relative">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex-1 flex flex-col items-center text-center relative">
              {/* Connector line (desktop only) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2.5rem)] right-0 h-0.5 bg-green-300 z-0" />
              )}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white font-extrabold text-lg shadow mb-4">
                {step.num}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────────────────────────── */
function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Tarifs simples</h2>
        <p className="text-center text-gray-500 mb-12">Sans frais cachés. Changez de plan à tout moment.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border-2 flex flex-col ${
                plan.highlight
                  ? "border-green-500 shadow-xl scale-105"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Populaire
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500 mb-1">{plan.unit}</span>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Regions ─────────────────────────────────────────────────────────────── */
function Regions() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Disponible dans tous les gouvernorats de Tunisie
        </h2>
        <p className="text-gray-500 mb-8 text-sm">De Bizerte à Kébili — chaque agriculteur tunisien est couvert.</p>
        <div className="flex flex-wrap justify-center gap-2">
          {REGIONS.map((r) => (
            <span
              key={r}
              className="px-3 py-1.5 bg-white border border-green-200 text-green-700 text-sm rounded-full font-medium shadow-sm"
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ──────────────────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="py-20 px-4 bg-green-600 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
          Rejoignez les premiers agriculteurs tunisiens sur Fellah
        </h2>
        <p className="text-green-100 mb-8 text-lg">
          Gratuit pour toujours. Pas de carte bancaire requise.
        </p>
        <a
          href={`${APP_URL}/register`}
          className="inline-flex items-center px-10 py-4 text-base font-bold bg-white text-green-700 rounded-xl hover:bg-green-50 transition-colors shadow-lg"
        >
          Commencer gratuitement →
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <span>🌿</span>
          <span>Fellah</span>
        </div>
        <p className="text-sm">© 2026 Fellah. Tous droits réservés.</p>
        <nav className="flex flex-wrap gap-4 text-sm justify-center">
          <a href="/privacy" className="hover:text-white transition-colors">
            Politique de confidentialité
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Conditions d&apos;utilisation
          </a>
          <a
            href="https://wa.me/21600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Contact WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <Pricing />
        <Regions />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
