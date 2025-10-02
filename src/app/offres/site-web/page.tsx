

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { ContactModalTrigger } from "@/components/contact-modal-trigger";

const packs = [
  {
    title: "Offre Site Starter",
    price: "à partir de 1 000€ HT",
    icon: null,
    popular: false,
    audience: "Idéal pour les indépendants ou petites entreprises souhaitant une présence en ligne rapide avec un site vitrine simple et professionnel.",
    features: [
      "Cadrage + maquettage léger",
      "Création du site (1-3 pages)",
      "Ajustements + livrable final",
    ],
    link: "Choix du pack: 'Site Web'"
  },
  {
    title: "Offre Impact Site Signature",
    price: "à partir de 2 000€ HT",
    icon: <Star className="h-6 w-6 text-yellow-400" />,
    popular: true,
    audience: "Pour les entreprises souhaitant un site professionnel avec un design soigné et une structure optimisée pour leur activité.",
    features: [
      "Sessions stratégiques + arborescence",
      "Design + création du site (4-6 pages)",
      "Corrections + finalisation + tests",
    ],
    link: "Choix du pack: 'Site Signature'"
  },
  {
    title: "Offre Site Premium Évolutif",
    price: "à partir de 3 500€ HT",
    icon: null,
    popular: false,
    audience: "Pour les entreprises ambitieuses souhaitant un site évolutif avec des fonctionnalités avancées comme un blog ou des animations.",
    features: [
      "Sessions d’accompagnement + arborescence détaillée",
      "Design complet + développement (jusqu’à 10 pages)",
      "Formation client + retours multiples",
    ],
    link: "Choix du pack: 'Site Premium Évolutif'"
  },
    {
    title: "Offre Site E-commerce",
    price: "à partir de 4 000€ HT",
    icon: <ShoppingCart className="h-6 w-6 text-blue-500" />,
    popular: false,
    audience: "Pour les entreprises souhaitant lancer une boutique en ligne professionnelle avec une gestion optimisée des produits.",
    features: [
      "Cadrage, structure e-commerce, stratégie produits",
      "Design + intégration boutique (jusqu’à 20 produits)",
      "Paramétrage, formation, tests + retours",
    ],
    link: "Choix du pack: 'Site E-commerce'"
  },
];

export default function SiteWebPage() {
  const { hero, cta } = placeholderImages.offers.website;
  const need = "Site Web";
  return (
    <div className="bg-background">
      <div className="relative overflow-hidden">
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
          data-ai-hint={hero.hint}
        />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-foreground">Construisez un site web qui reflète votre marque</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Découvrez nos packs sur mesure pour créer un site web professionnel, responsive et adapté à vos ambitions, du site vitrine à la boutique e-commerce.
            </p>
            <p className="text-md text-muted-foreground">Chaque site est conçu pour captiver votre audience et optimiser votre présence en ligne.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24 md:pb-32">
        <div className="text-center my-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Nos Offres de Création de Sites Web</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {packs.map((pack, index) => (
            <Card key={index} className={`flex flex-col ${pack.popular ? 'border-primary ring-2 ring-primary shadow-lg' : 'border-border'}`}>
                <CardHeader className="relative">
                    {pack.popular && <div className="absolute top-0 right-4 -mt-3 bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">Plus Populaire</div>}
                    <div className="flex items-center gap-3">
                        {pack.icon}
                        <CardTitle className="font-headline text-2xl text-foreground">💻 {pack.title}</CardTitle>
                    </div>
                    <CardDescription className="text-2xl font-bold text-primary pt-2">{pack.price}</CardDescription>
                </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="font-semibold text-foreground">✨ Pour qui ?</p>
                <p className="text-muted-foreground text-sm">{pack.audience}</p>
                <ul className="space-y-2 pt-2">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <ContactModalTrigger
                    subject={pack.link}
                    need={need}
                    className="w-full"
                  >
                  Choisir ce pack
                </ContactModalTrigger>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                    src={cta.src}
                    alt={cta.alt}
                    fill
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                    data-ai-hint={cta.hint}
                />
            </div>
            <div className="text-center md:text-left max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold font-headline mb-4">Prêt à lancer votre site web ?</h3>
                <p className="text-muted-foreground mb-8">Contactez-nous dès aujourd’hui pour discuter de vos besoins et choisir le pack qui vous correspond.</p>
                <ContactModalTrigger
                  need={need}
                  size="lg"
                >
                    Remplissez ce formulaire
                </ContactModalTrigger>
            </div>
        </div>
      </div>
    </div>
  );
}
