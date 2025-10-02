

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check, Star, Wrench, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { ContactModalTrigger } from "@/components/contact-modal-trigger";

const packs = [
  {
    title: "Offre Présence Mobile",
    price: "À partir de 1 500€ HT",
    icon: null,
    popular: false,
    audience: "Idéal pour les entreprises souhaitant une application vitrine simple et rapide pour une présence sur Android ou iOS.",
    features: [
      "1 session de cadrage (1h)",
      "Design responsive",
      "Développement Basics (infos formulaire)",
      "Icône & publication sur stores (1 OS)",
      "1 aller-retour de corrections",
    ],
    link: "Choix du pack: 'Application Mobile'"
  },
  {
    title: "Offre d’Application Pro",
    price: "À partir de 3000 € HT",
    icon: <Star className="h-6 w-6 text-yellow-400" />,
    popular: true,
    audience: "Pour les entreprises voulant une application personnalisée avec des fonctionnalités simples, publiée sur Android et iOS.",
    features: [
      "2 sessions de cadrage et maquettage",
      "Design UI sur mesure (jusqu’à 5 écrans)",
      "Développement front + back simple",
      "Connexion à base de données client",
      "Publication sur App Store + Google Play",
      "2 allers-retours de corrections",
    ],
    link: "Choix du pack: 'Application Pro'"
  },
  {
    title: "Offre d’Application Métier",
    price: "À partir de 5 000€ HT",
    icon: null,
    popular: false,
    audience: "Pour les entreprises ambitieuses souhaitant une application métier ou communautaire évolutive avec des fonctionnalités avancées.",
    features: [
      "3 sessions de co-conception (1h30 chacune)",
      "Architecture + UI avancée (jusqu’à 8 écrans)",
      "Développement multi-plateformes (Flutter/React Native)",
      "Connexion à base de données + logique métier",
      "Formation & documentations utilisateurs",
      "3 allers-retours de corrections",
    ],
    link: "Choix du pack: 'Application Métier'"
  },
];

export default function ApplicationMobilePage() {
  const { hero, cta } = placeholderImages.offers.mobileApp;
  const need = "Application Mobile";
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
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-foreground">Votre entreprise au creux de la main</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Découvrez nos packs d’applications mobiles sur mesure pour une présence digitale intuitive et professionnelle, adaptée à vos besoins.
              </p>
              <p className="text-md text-muted-foreground">De la vitrine simple à l’application métier évolutive, chaque solution est conçue pour renforcer votre connexion avec vos utilisateurs.</p>
            </div>
          </div>
      </div>
      
      <div className="container mx-auto px-4 pb-24 md:pb-32">
        <div className="text-center my-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Nos Offres d’Applications Mobiles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packs.map((pack, index) => (
            <Card key={index} className={`flex flex-col ${pack.popular ? 'border-primary ring-2 ring-primary shadow-lg' : 'border-border'}`}>
                <CardHeader className="relative">
                    {pack.popular && <div className="absolute top-0 right-4 -mt-3 bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">Plus Populaire</div>}
                    <div className="flex items-center gap-3">
                        {pack.icon}
                        <CardTitle className="font-headline text-2xl text-foreground">📱 {pack.title}</CardTitle>
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
        
        <Card className="mt-16 bg-secondary/50">
            <CardContent className="p-8 md:p-10 text-center">
                <Wrench className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-headline text-2xl font-bold mb-2">Option Maintenance / Évolutions</h3>
                <p className="text-muted-foreground mb-4">Assurez la pérennité et l’évolution de votre application avec notre service de maintenance.</p>
                <p className="text-lg font-semibold text-foreground mb-4">Disponible sur devis ou en forfait mensuel à partir de 300 €/mois.</p>
                <ContactModalTrigger
                    subject="Demande de devis Maintenance"
                    need={need}
                    variant="outline"
                  >
                    <MessageSquareQuote className="mr-2 h-4 w-4" /> Demander un devis
                </ContactModalTrigger>
            </CardContent>
        </Card>

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
              <h3 className="text-3xl font-bold font-headline mb-4">Prêt à lancer votre application mobile ?</h3>
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
