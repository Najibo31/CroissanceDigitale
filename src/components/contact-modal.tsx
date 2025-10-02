'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useEffect } from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';

const formSchema = z.object({
  phone: z.string().min(10, { message: 'Le numéro de téléphone doit être valide.' }),
  email: z.string().email({ message: 'Adresse email invalide.' }),
  need: z.string({ required_error: "Veuillez sélectionner la nature du besoin."}),
  projectDescription: z.string().min(10, { message: 'La description doit contenir au moins 10 caractères.' }).max(500, { message: 'La description ne doit pas dépasser 500 caractères.' }),
  workInterest: z.string({ required_error: 'Veuillez sélectionner un travail.' }),
});

interface ContactModalContentProps {
  subject?: string | null;
  need?: string | null;
}

export function ContactModalContent({ subject, need }: ContactModalContentProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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

  return (
    <DialogContent className="sm:max-w-[625px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
                src="https://i.postimg.cc/9FZpzK2Q/Digitale-R-cup-r.png"
                alt="Logo background"
                width={300}
                height={300}
                className="opacity-40"
            />
        </div>
        <div className='relative z-10'>
            <DialogHeader>
                <DialogTitle>Demande de Devis</DialogTitle>
                <DialogDescription>
                 Utilisez ce formulaire pour nous contacter et demander un devis personnalisé pour votre projet.
                </DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>

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

                    <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Décrivez votre projet en détail... *</FormLabel>
                            <FormControl>
                            <Textarea placeholder="Décrivez ici votre projet..." {...field} className="min-h-32" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    
                    <Button type="submit" size="lg" className="w-full">
                        Demander un devis
                    </Button>
                </form>
            </Form>
        </div>
    </DialogContent>
  );
}
