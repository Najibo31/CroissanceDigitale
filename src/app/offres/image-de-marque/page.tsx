
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check, Star, Crown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import placeholderImages from "@/app/lib/placeholder-images.json";

const packs = [
  {
    title: "Offre Starter ‘Identité Express’",
    price: "À partir de 750€ HT",
    icon: null,
    popular: false,
    audience: "Les entrepreneurs qui démarrent ou qui ont besoin d’une identité simple mais professionnelle, rapidement opérationnelle.",
    features: [
      "1 session d’échange (45 min)",
      "Moodboard personnalisé",
      "Palette couleurs + typographie",
      "Logo principal + déclinaisons",
      "Kit réseaux sociaux",
      "Formats professionnels inclus",
      "1 aller-retour corrections",
    ],
    link: "Choix du pack: 'Identité Express'"
  },
  {
    title: "Offre Signature ‘Image Complète’",
    price: "À partir de 1 500€ HT",
    icon: <Star className="h-6 w-6 text-yellow-400" />,
    popular: true,
    audience: "Les entreprises qui veulent une image cohérente, alignée avec leur mission et facilement déclinable sur tous leurs supports.",
    features: [
        "2 sessions d’échange (1h chacune)",
        "Mini-audit positionnement",
        "Univers visuel complet",
        "Kit communication avancé",
        "Templates Canva personnalisés",
        "Charte graphique simplifiée",
        "2 allers-retours corrections",
    ],
    link: "Choix du pack: 'Image Complète'"
  },
  {
    title: "Offre Premium ‘Branding Stratégique’",
    price: "À partir de 2 500€ HT",
    icon: <Crown className="h-6 w-6 text-amber-500" />,
    popular: false,
    audience: "Les marques ambitieuses qui veulent poser des bases solides, attirer leur cible idéale et rayonner avec clarté.",
    features: [
        "3 sessions stratégiques (1h30 max)",
        "1 Atelier stratégique complet",
        "Plateforme de marque ‘les fondamentaux)",
        "Univers visuel exclusif",
        "Templates professionnels",
        "Charte graphique interactive",
        "3 allers-retours corrections",
    ],
    link: "Choix du pack: 'Branding Stratégique'"
  },
];

export default function ImageDeMarquePage() {
  const { hero, cta } = placeholderImages.offers.branding;
  const need = "Image de Marque";
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
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-foreground">Construisez une identité de marque qui vous ressemble</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Découvrez nos packs sur mesure pour créer une image de marque professionnelle, cohérente et impactante, adaptée à vos ambitions et à votre budget.
            </p>
            <p className="text-md text-muted-foreground">Du logo à la charte graphique, chaque pack est conçu pour refléter vos valeurs et captiver votre audience.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24 md:pb-32">
        <div className="text-center my-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Nos Offres d’Identité de Marque</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packs.map((pack, index) => (
            <Card key={index} className={`flex flex-col ${pack.popular ? 'border-primary ring-2 ring-primary shadow-lg' : 'border-border'}`}>
                <CardHeader className="relative">
                    {pack.popular && <div className="absolute top-0 right-4 -mt-3 bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">Plus Populaire</div>}
                    <div className="flex items-center gap-3">
                        {pack.icon}
                        <CardTitle className="font-headline text-2xl text-foreground">{pack.title}</CardTitle>
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
                <Button asChild className="w-full">
                  <Link href={`/contactez-nous?subject=${encodeURIComponent(pack.link)}&need=${encodeURIComponent(need)}`}>Choisir ce pack</Link>
                </Button>
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
              <h3 className="text-3xl font-bold font-headline mb-4">Prêt à créer votre identité de marque ?</h3>
              <p className="text-muted-foreground mb-8">Contactez-nous dès aujourd’hui pour discuter de vos besoins et choisir le pack qui vous correspond.</p>
              <Button asChild size="lg">
                  <Link href={`/contactez-nous?need=${encodeURIComponent(need)}`}>Remplissez ce formulaire</Link>
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
