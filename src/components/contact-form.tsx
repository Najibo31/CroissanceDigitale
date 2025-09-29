'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'Le prénom doit contenir au moins 2 caractères.' }),
  lastName: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  companyName: z.string().optional(),
  phone: z.string().min(10, { message: 'Le numéro de téléphone doit être valide.' }),
  email: z.string().email({ message: 'Adresse email invalide.' }),
  need: z.string({ required_error: "Veuillez sélectionner la nature du besoin."}),
  projectDescription: z.string().min(10, { message: 'La description doit contenir au moins 10 caractères.' }).max(500, { message: 'La description ne doit pas dépasser 500 caractères.' }),
  workInterest: z.string({ required_error: 'Veuillez sélectionner un travail.' }),
  requestType: z.enum(['urgent', 'open'], { required_error: 'Veuillez sélectionner un type de demande.' }),
});

export function ContactForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');
  const need = searchParams.get('need');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      phone: '',
      email: '',
      projectDescription: '',
      workInterest: subject || '',
      need: need || '',
    },
  });

  useEffect(() => {
    if (subject) {
      form.setValue('workInterest', subject);
    }
    if (need) {
      form.setValue('need', need);
    }
  }, [subject, need, form]);

  const projectDescription = form.watch('projectDescription');

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dans les plus brefs délais.',
    });
    form.reset();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Card className="border-none shadow-2xl shadow-primary/10">
      <CardContent className="p-8 md:p-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre prénom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom de famille" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom d’entreprise</FormLabel>
                      <FormControl>
                        <Input placeholder="Le nom de votre entreprise" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numéro de téléphone *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre numéro de téléphone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre adresse email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="need"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nature du besoin *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} defaultValue={need || ""}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="— Sélectionnez la nature de votre besoin —" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Image de Marque">Image de Marque</SelectItem>
                          <SelectItem value="Site Web">Site Web</SelectItem>
                          <SelectItem value="Application Mobile">Application Mobile</SelectItem>
                          <SelectItem value="Accompagnement">Accompagnement / Contenu Digital</SelectItem>
                          <SelectItem value="Autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="projectDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Décrivez votre projet en détail...</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Décrivez ici votre projet..." {...field} className="min-h-40" />
                      </FormControl>
                      <FormDescription className="text-right">{projectDescription.length}/500 caractères</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="workInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Travail qui vous intéresse *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} defaultValue={subject || ""}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="— Sélectionnez un travail —" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Choix du pack: 'Identité Express'">Offre Starter ‘Identité Express’</SelectItem>
                            <SelectItem value="Choix du pack: 'Image Complète'">Offre Signature ‘Image Complète’</SelectItem>
                            <SelectItem value="Choix du pack: 'Branding Stratégique'">Offre Premium ‘Branding Stratégique’</SelectItem>
                            <SelectItem value="Choix du pack: 'Site Web'">Offre Site Starter</SelectItem>
                            <SelectItem value="Choix du pack: 'Site Signature'">Offre Impact Site Signature</SelectItem>
                            <SelectItem value="Choix du pack: 'Site Premium Évolutif'">Offre Site Premium Évolutif</SelectItem>
                            <SelectItem value="Choix du pack: 'Site E-commerce'">Offre Site E-commerce</SelectItem>
                            <SelectItem value="Choix du pack: 'Application Mobile'">Offre Présence Mobile</SelectItem>
                            <SelectItem value="Choix du pack: 'Application Pro'">Offre d’Application Pro</SelectItem>
                            <SelectItem value="Choix du pack: 'Application Métier'">Offre d’Application Métier</SelectItem>
                            <SelectItem value="Demande de devis Maintenance">Option Maintenance / Évolutions</SelectItem>
                            <SelectItem value="Choix du pack: 'Contenu Digital'">Pack Starter l’Essentiel des Réseaux</SelectItem>
                            <SelectItem value="Choix du pack: 'Visibilité Pro'">Pack Ambition la Visibilité Pro</SelectItem>
                            <SelectItem value="Choix du pack: 'Influence & Impact'">Pack Premium ‘Influence & Impact’</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                 <FormField
                  control={form.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem className="p-6 rounded-lg bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold">Travail urgent ?</h3>
                        <p className="text-sm opacity-90 mt-1 mb-4">
                          La réalisation de votre travail dépendra de vos demandes spécifiques et de notre charge de travail actuelle.
                        </p>
                      </div>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex justify-center items-center space-x-6"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="urgent" id="urgent" className="border-primary-foreground text-primary-foreground focus:ring-primary-foreground" />
                            </FormControl>
                            <FormLabel htmlFor="urgent" className="font-normal">
                              Urgent
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="open" id="open" className="border-primary-foreground text-primary-foreground focus:ring-primary-foreground" />
                            </FormControl>
                            <FormLabel htmlFor="open" className="font-normal">
                              Ouvert
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="text-center pt-2" />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button type="submit" size="lg" className="w-full">
                  Demander un devis
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </CardContent>
    </Card>
  );
}
