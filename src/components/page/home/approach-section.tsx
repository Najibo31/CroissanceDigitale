'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const approachSteps = [
  { 
    title: "Analyse", 
    description: "Comprendre pour mieux agir",
    details: "Avant toute action, nous prenons le temps de comprendre votre activité, vos objectifs et vos défis. Grâce à une analyse approfondie de votre situation actuelle, nous identifions les leviers à activer pour maximiser votre impact.",
    points: ["Une cartographie complète de vos besoins", "Un diagnostic stratégique personnalisé", "Une base solide pour construire ensemble"]
  },
  { 
    title: "Stratégie", 
    description: "Une feuille de route claire et alignée",
    details: "Sur la base des insights récoltés, nous élaborons une stratégie digitale sur mesure, en phase avec vos ambitions. Chaque action est planifiée, priorisée et reliée à des objectifs précis.",
    points: ["Une stratégie adaptée à votre secteur et à votre marché", "Des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis)", "Une feuille de route qui vous guide pas à pas"]
  },
  { 
    title: "Implémentation", 
    description: "Des solutions efficaces et sur mesure",
    details: "C’est ici que l’idée devient réalité. Nous passons à l’action avec des solutions digitales concrètes, adaptées à vos besoins : création de sites web, développement d’applications, automatisation de processus, ou refonte de présence en ligne.",
    points: ["Mise en place rapide et professionnelle", "Solutions techniques optimisées et évolutives", "Collaboration fluide entre nos équipes et les vôtres"]
  },
  { 
    title: "Optimisation", 
    description: "Ajustements continus pour des performances maximisées",
    details: "Le digital ne s’arrête jamais — et nous non plus. Grâce à un suivi régulier et des analyses précises, nous ajustons constamment votre stratégie pour garantir un retour sur investissement optimal.",
    points: ["Surveillance continue des indicateurs clés", "Améliorations basées sur des données réelles", "Une performance qui s’améliore mois après mois"]
  },
  { 
    title: "Croissance", 
    description: "Construire ensemble un succès durable",
    details: "Une fois vos objectifs atteints, nous ne nous arrêtons pas là. Nous travaillons avec vous à pérenniser vos succès et à explorer de nouvelles opportunités pour faire passer votre activité au niveau supérieur.",
    points: ["Déploiement de stratégies d’acquisition et de fidélisation", "Expansion sur de nouveaux marchés ou canaux", "Un partenariat orienté croissance à long terme"]
  },
];

export function ApproachSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50 } }
    };

  return (
    <section id="collaboration" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">Notre Approche</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Un processus en 5 étapes pour garantir la réussite de votre projet, de l'idée initiale à la croissance continue.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-border/50 rounded-full hidden md:block" aria-hidden="true"></div>
          <motion.div 
            className="space-y-8 md:space-y-0"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {approachSteps.map((step, index) => (
              <motion.div 
                key={step.title} 
                variants={item}
                className="md:space-y-8"
              >
                <div
                    className="relative flex items-center cursor-pointer"
                    style={{ justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    <div className="md:w-1/2">
                       <div className="md:flex items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                          <div className="hidden md:block w-8 h-8 rounded-full bg-primary ring-8 ring-background absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10" />
                          <div className="flex-1">
                            <div className="p-6 bg-card rounded-lg shadow-lg border-l-4 border-accent text-left md:mx-8">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h3 className="font-headline text-2xl font-bold text-primary">{`0${index + 1}. ${step.title}`}</h3>
                                    <p className="text-muted-foreground mt-2">{step.description}</p>
                                  </div>
                                  <ChevronDown className={cn("h-6 w-6 text-muted-foreground transition-transform", openIndex === index && "rotate-180")} />
                                </div>
                                <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={{ height: 'auto', opacity: 1, marginTop: '1.5rem' }}
                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-muted-foreground text-sm">{step.details}</p>
                                        <ul className="mt-4 space-y-2 text-sm">
                                            {step.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-primary font-bold">›</span>
                                                    <span className="text-muted-foreground">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                                </AnimatePresence>
                            </div>
                          </div>
                       </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
