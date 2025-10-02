'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ContactModalTrigger } from '@/components/contact-modal-trigger';

export function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <section id="accueil" className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center bg-gray-900">
             <Image
                src="https://i.postimg.cc/xTKNVSGn/45v-OLAMYt-P9tfa-CUfexz.jpg"
                alt="Background"
                fill
                objectFit="cover"
                className="absolute inset-0 z-0 opacity-30"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-black/80 z-10"></div>
           
            <div className="container mx-auto px-4 z-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        className="max-w-xl text-center md:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 text-white tracking-tighter" variants={itemVariants}>
                            Croissance Digitale
                        </motion.h1>
                        
                        <motion.p className="text-lg md:text-xl text-white/90 mb-8" variants={itemVariants}>
                            Donnez un nouvel élan à votre activité avec une présence en ligne professionnelle, construite sur-mesure pour refléter votre image et soutenir votre croissance. Sites web modernes, boutiques e-commerce, identité visuelle : nous créons des solutions sur mesure pour transformer vos idées en succès digital.
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4" variants={itemVariants}>
                            <Button asChild size="lg" className="text-lg">
                                <Link href="/#offers">
                                    Découvrez nos offres <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <ContactModalTrigger asChild>
                                <Button size="lg" variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-primary hover:text-primary-foreground hover:border-primary">
                                    Parlez-nous de vos besoins
                                </Button>
                            </ContactModalTrigger>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="relative h-full w-full self-end justify-self-end hidden md:block"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        <Image
                            src="https://i.postimg.cc/pVQsVyt6/Calque.png"
                            alt="Illustration"
                            width={500}
                            height={700}
                            className="object-contain object-bottom"
                            style={{maxHeight: '70vh', marginLeft: 'auto'}}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
