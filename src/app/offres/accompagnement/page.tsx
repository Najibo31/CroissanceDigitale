

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { ContactModalTrigger } from "@/components/contact-modal-trigger";

const packs = [
  {
    title: "Pack Starter l’Essentiel des Réseaux",
    price: "1 000€ HT",
    popular: false,
    audience: "Idéal pour les indépendants, freelances ou petites structures qui souhaitent amorcer leur communication avec des contenus réguliers et soignés.",
    features: [
      "1 session éditoriale (30 min)",
      "6 visuels statiques personnalisés",
      "1 vidéo courte (15-30 sec)",
      "3 légendes prêtes à publier",
      "Formats adaptés pour Instagram, Facebook, LinkedIn",
    ],
    link: "Choix du pack: 'Contenu Digital'"
  },
  {
    title: "Pack Ambition la Visibilité Pro",
    price: "2 000€ HT",
    popular: true,
    audience: "Conçu pour les professionnels en développement qui souhaitent publier de manière régulière avec un contenu diversifié et engageant.",
    features: [
      "1 session de cadrage stratégique (45 min)",
      "10 visuels statiques (brand content, FAQ, storytelling)",
      "3 vidéos verticales (Reels, Stories, 15-45 sec)",
      "6 légendes + hashtags optimisés",
      "Mini calendrier éditorial (4 semaines)",
      "Déclinaisons multi-formats",
      "2 allers-retours de validation",
    ],
    link: "Choix du pack: 'Visibilité Pro'"
  },
  {
    title: "Pack Premium ‘Influence & Impact’",
    price: "3 500€ HT",
    popular: false,
    audience: "Pour les marques qui veulent se positionner comme références avec un contenu professionnel, impactant et engageant.",
    features: [
      "1 session stratégique approfondie (1h à 1h30)",
      "14 visuels statiques haut de gamme",
      "6 vidéos verticales (Reels, teasers, mini-interviews)",
      "10 légendes avec storytelling & appels à l’action",
      "Plan éditorial 1 mois + grille de feed",
      "Déclinaisons multi-réseaux",
      "3 allers-retours de validation",
    ],
    link: "Choix du pack: 'Influence & Impact'"
  },
];

const videos = [
    { type: "Vidéo animée simple", description: "Texte + image, motion graphique léger", price: "150 €" },
    { type: "Vidéo Reels montée", description: "Vidéo montée avec sous-titres, musique", price: "300 €" },
    { type: "Vidéo storytelling", description: "Mini-interview ou narration courte", price: "450 €" },
    { type: "Pack 3 vidéos", description: "Thématique ou teasing produits", price: "800 €" },
]

export default function AccompagnementPage() {
  const { hero, cta } = placeholderImages.offers.accompaniment;
  const need = "Accompagnement";
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
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-foreground">Créez une présence digitale impactante</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Boostez votre visibilité avec des contenus percutants et cohérents, conçus pour engager votre audience et renforcer votre marque.
            </p>
            <p className="text-md text-muted-foreground">Visuels, vidéos, storytelling : chaque contenu est optimisé pour vos réseaux sociaux.</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-24 md:pb-32">
        <div className="text-center my-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Nos Offres de Contenu Digital</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packs.map((pack, index) => (
            <Card key={index} className={`flex flex-col ${pack.popular ? 'border-primary ring-2 ring-primary shadow-lg' : 'border-border'}`}>
                <CardHeader className="relative">
                    {pack.popular && <div className="absolute top-0 right-4 -mt-3 bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">Plus Populaire</div>}
                     <div className="flex items-center gap-3">
                        {pack.popular ? <Star className="h-6 w-6 text-yellow-400" /> : (pack.title.includes('Premium') && <span className="text-2xl">🌟</span>) }
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

        <div className="mt-24">
            <h3 className="text-3xl font-bold font-headline text-center mb-8">Vidéos à la Carte</h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">Enrichissez votre communication avec des vidéos engageantes, optimisées pour tous vos réseaux sociaux.</p>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-semibold">Type de vidéo</TableHead>
                            <TableHead className="font-semibold">Description</TableHead>
                            <TableHead className="text-right font-semibold">Tarif</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {videos.map(video => (
                            <TableRow key={video.type}>
                                <TableCell className="font-medium">{video.type}</TableCell>
                                <TableCell className="text-muted-foreground">{video.description}</TableCell>
                                <TableCell className="text-right font-bold text-primary">{video.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
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
                <h3 className="text-3xl font-bold font-headline mb-4">Prêt à booster votre présence digitale ?</h3>
                <p className="text-muted-foreground mb-8">Contactez-nous dès aujourd’hui pour discuter de vos besoins et choisir le pack ou la vidéo qui vous correspond.</p>
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
