'use client';
import { BrainCircuit, Image as ImageIcon, Code, PenTool } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    icon: BrainCircuit,
    title: 'Accompagnement',
    description: 'Nous guidons votre transition numérique avec des solutions sur mesure pour rester agile et compétitif.',
  },
  {
    icon: ImageIcon,
    title: 'Image de Marque',
    description: 'Création d’une identité visuelle forte avec logo, charte graphique et univers unique.',
  },
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Sites et applications sur mesure, performants et évolutifs pour vos besoins.',
  },
  {
    icon: PenTool,
    title: 'Contenu Digital',
    description: 'Contenus visuels et éditoriaux alignés sur votre marque pour engager votre audience.',
  },
];

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    }
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-foreground">Les services pour votre Croissance</h2>
        </div>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
             <motion.div
                key={service.title}
                variants={cardVariants}
            >
                <Card className="text-center h-full bg-card border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                            <service.icon className="h-10 w-10" />
                        </div>
                        <CardTitle className="font-headline mt-4 text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
