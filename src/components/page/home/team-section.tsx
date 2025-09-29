'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const teamFeatures = [
    { title: "Expertise 360°", text: "Stratégie, design, code : nous transformons vos idées en solutions concrètes." },
    { title: "Approche Humaine", text: "Pas de jargon, juste des solutions sur mesure pour votre réussite." },
    { title: "Une Équipe Complémentaire", text: "Fondatrice, designer Interface et expérience utilisateurs, développeur : nous unissons nos forces pour vous." },
];

export function TeamSection() {
    const cardVariants = {
        offscreen: { x: -100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 50, duration: 1 }
        }
    };

  return (
    <section id="experts" className="py-20 md:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">Notre équipe, Votre partenaire</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="flex justify-center"
            >
                <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                     <Image 
                        src="https://i.postimg.cc/d16ZXbz4/1516875135744-1.jpg"
                        alt="Ibtissem AMSLER" 
                        width={400} 
                        height={400} 
                        className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-2xl"
                        data-ai-hint="professional woman"
                    />
                </div>
            </motion.div>
            <div className="space-y-8">
                <div>
                    <h3 className="font-headline text-3xl font-bold">Ibtissem AMSLER</h3>
                    <p className="text-primary font-semibold text-lg">Consultante en transformation digitale • Fondatrice de Croissance Digitale</p>
                    <p className="mt-4 text-muted-foreground">Avec 12 ans d’expérience auprès de grands groupes, je mets mon expertise au service des entrepreneurs de Guadeloupe pour structurer et digitaliser leurs projets.</p>
                    <p className="mt-4 italic text-foreground border-l-4 border-accent pl-4">“Le digital, c’est votre vision qui prend vie. Ensemble, construisons votre succès.”</p>
                </div>
                
                <Separator />

                <div className="space-y-4">
                    {teamFeatures.map(feature => (
                        <div key={feature.title} className="flex items-start gap-4">
                            <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-bold font-headline text-lg">{feature.title}</h4>
                                <p className="text-muted-foreground">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="mt-24">
             <Card className="bg-card shadow-lg">
                <CardContent className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <h4 className="font-headline text-2xl font-bold mb-4">Femmes Entrepreneuses & Croissance Digitale</h4>
                        <p className="text-muted-foreground mb-4">Je participe au programme Femmes Entrepreneuses d’Orange, un dispositif unique qui accompagne les créatrices d’entreprises en France pour démocratiser l’entrepreneuriat féminin. Pendant 10 mois, ce programme gratuit me soutient dans le développement de mon business grâce à un accompagnement personnalisé, des mentors, et l’accès au réseau du Cercle des Femmes Entrepreneuses. Orange m’accompagne pour booster ma visibilité, renforcer mon leadership et tester mes offres avec des solutions digitales adaptées.</p>
                        <Button variant="link" className="p-0 text-primary">En savoir plus</Button>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image
                            src="https://i.postimg.cc/jdjr6H8N/Bandeau-RS-2025-Instagram-1080x1080-blanc.png"
                            alt="Femmes Entrepreneuses"
                            width={1080}
                            height={1080}
                            className="w-full h-auto object-cover rounded-md"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
