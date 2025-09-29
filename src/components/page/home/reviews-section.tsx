'use client';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

const rezoProReview = {
    name: "RezoPro",
    avatar: "https://i.postimg.cc/gjcBt7mt/Capture-d-cran-2025-06-28-004024.png",
    short: "👋 Présentation du projet RezoPro est une plateforme de mise en relation entre les professionnels du BTP et de la prestation de services en Guadeloupe. Notre objectif : simplifier l’accès à des prestataires qualifiés.",
    full: [
        {
            title: "🤝 Pourquoi avoir choisi Croissance Digitale ?",
            text: "Dès le départ, j’avais une idée claire du résultat que je voulais atteindre, mais je ne savais pas comment structurer le projet ni comment passer de cette vision à une solution concrète. Croissance Digitale m’a permis de poser les bonnes bases, de donner une cohérence à l’ensemble, et surtout de traduire cette idée en un projet viable, bien pensé et bien positionné."
        },
        {
            title: "🔧 Ce que nous avons construit ensemble",
            text: "Avec leur aide, nous avons travaillé sur :",
            points: [
                "La clarification du concept et la structuration du business plan",
                "Le naming : RezoPro, un nom lisible, professionnel et en phase avec le public ciblé",
                "La création d’une identité visuelle complète : logo, charte graphique, supports",
                "Le développement du site internet : contenu, structure",
                "Un accompagnement global dans la stratégie de marque et de lancement digital"
            ]
        },
        {
            title: "💡 Un accompagnement clair, structurant et à l’écoute",
            text: "Au-delà des livrables, j’ai bénéficié d’un véritable accompagnement stratégique, humain et impliqué. L’équipe m’a guidée étape par étape, en restant à l’écoute de ma vision, tout en m’apportant une vraie méthodologie et des conseils adaptés."
        },
        {
            title: "🛠 De l’idée au concret",
            text: "Ce que j’ai vraiment apprécié, c’est leur capacité à transformer une idée précise mais non structurée en un concept clair, prêt à être lancé. Leur vision stratégique a fait toute la différence, notamment sur le positionnement et l’image de marque."
        },
        {
            title: "🕒 Réactivité au rendez-vous",
            text: "L’équipe a toujours su se rendre disponible et réactive, même dans les périodes intenses. Chaque ajustement, chaque question a été pris en compte rapidement et efficacement."
        },
        {
            title: "🎯 Des résultats concrets",
            text: "Aujourd’hui, RezoPro dispose d’une base solide pour se faire connaître : une marque cohérente, un positionnement clair, et une plateforme fonctionnelle qui commence à générer de l’intérêt."
        },
        {
            title: "🏆 Identité & site web : un outil efficace",
            text: "Le logo et l’identité visuelle reflètent bien l’esprit de la marque. Quant au site web, il est fluide, structuré, et pensé pour les utilisateurs. Il répond à mes attentes et remplit bien sa mission."
        },
        {
            title: "🎥 Présence digitale : une stratégie repensée",
            text: "Croissance Digitale m’a également aidée à repenser ma stratégie de contenu sur Instagram. Ensemble, nous avons défini une ligne éditoriale claire, en lien avec ma marque, et ils ont contribué à la création de visuels impactants pour commencer à structurer ma présence en ligne."
        },
        {
            title: "📣 Une collaboration que je recommande",
            text: "Je recommande vivement Croissance Digitale, surtout à ceux qui, comme moi, ont une vision mais manquent d’outils pour structurer leur projet. Leur accompagnement est clair, stratégique et humain, de la première idée jusqu’au lancement."
        },
        {
            title: "❤ Un mot pour conclure",
            text: "Un grand merci à toute l’équipe pour votre professionnalisme, votre patience et votre engagement. Grâce à vous, RezoPro est passé d’un concept à une réalité concrète."
        }
    ]
};


export function ReviewsSection() {
    return (
        <section id="avis" className="py-20 md:py-32 bg-background">
             <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">Ce que les gens disent sur nous</h2>
                </div>
                <div className="max-w-md mx-auto">
                    <Card className="h-full flex flex-col justify-between p-6 bg-card shadow-lg border hover:border-accent transition-all">
                        <CardContent className="flex flex-col items-start gap-4 p-0">
                            <div className="flex items-center gap-4">
                                <Avatar className="w-16 h-16">
                                    <AvatarImage src={rezoProReview.avatar} alt={rezoProReview.name} data-ai-hint="company logo"/>
                                    <AvatarFallback>{rezoProReview.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <p className="font-semibold font-headline text-xl">{rezoProReview.name}</p>
                            </div>
                            <blockquote className="text-muted-foreground text-base italic flex-grow pt-4">"{rezoProReview.short}"</blockquote>
                        </CardContent>
                        <div className="pt-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="link" className="p-0 h-auto text-primary font-semibold">Lire la suite</Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl">
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center gap-4">
                                            <Avatar className="w-12 h-12">
                                                <AvatarImage src={rezoProReview.avatar} alt={rezoProReview.name} />
                                                <AvatarFallback>{rezoProReview.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            Avis de {rezoProReview.name}
                                        </DialogTitle>
                                         <DialogDescription>
                                            {rezoProReview.short}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <ScrollArea className="h-[60vh] pr-4">
                                        <div className="space-y-6 mt-4 text-sm">
                                            {rezoProReview.full.map((section, index) => (
                                                <div key={index}>
                                                    <h4 className="font-semibold text-foreground mb-2">{section.title}</h4>
                                                    <p className="text-muted-foreground whitespace-pre-line">{section.text}</p>
                                                    {section.points && (
                                                        <ul className="list-disc list-inside space-y-1 mt-2 pl-2 text-muted-foreground">
                                                            {section.points.map((point, pIndex) =>(
                                                                <li key={pIndex}>{point}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </Card>
                </div>
             </div>
        </section>
    );
}
