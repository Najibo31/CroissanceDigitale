'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const offers = [
    { title: "Offres Image de Marque", price: "A partir de 750€", description: "Découvrez nos packs « Image de Marque » : des offres clés en main pour façonner une identité forte, cohérente et mémorable.", link: "/offres/image-de-marque" },
    { title: "Offres Site Web", price: "A partir de 1000€", description: "Vous souhaitez un site web à la hauteur de vos ambitions ? Nos packs ont été pensés pour vous offrir des solutions sur mesure.", link: "/offres/site-web" },
    { title: "Offres Application Mobile", price: "A partir de 1500€", description: "Votre présence mobile mérite mieux qu’une simple vitrine. Nous concevons des applications sur mesure, pensées pour votre métier.", link: "/offres/application-mobile" },
    { title: "Offres Accompagnement", price: "A partir de 1000€", description: "Faites passer votre communication à un autre niveau. Nous créons pour vous des contenus visuels et éditoriaux sur mesure.", link: "/offres/accompagnement" },
];

export function OffersSection() {
  return (
    <section id="offers" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">Nos offres « Conçues pour vous & personnalisables »</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {offers.map((offer, index) => (
                    <motion.div
                      key={offer.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                          <CardHeader>
                              <CardTitle className="font-headline text-2xl">{offer.title}</CardTitle>
                              <CardDescription className="text-primary font-bold">{offer.price}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                              <p className="text-muted-foreground text-sm">{offer.description}</p>
                          </CardContent>
                          <CardFooter>
                              <Button asChild variant="link" className="p-0 text-primary font-semibold">
                                  <Link href={offer.link}>En savoir plus</Link>
                              </Button>
                          </CardFooter>
                      </Card>
                    </motion.div>
                ))}
            </div>
            <div className="relative group rounded-lg overflow-hidden h-[400px] md:h-[600px] w-full">
                <Image 
                    src="https://i.postimg.cc/mk72Zhq5/pexels-photo-3184635-3184635-683x1024.jpg"
                    alt="Colleagues collaborate on data analysis at a team meeting with charts and laptop."
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 group-hover:scale-105"
                    data-ai-hint="team meeting charts"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
        </div>
      </div>
    </section>
  );
}
