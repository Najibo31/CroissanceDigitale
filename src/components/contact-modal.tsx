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
import { useEffect, useState, useRef } from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';
import { sendContactEmail } from '@/ai/flows/send-contact-email-flow';
import { Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const formSchema = z.object({
  phone: z.string().min(10, { message: 'Le numéro de téléphone doit être valide.' }),
  email: z.string().email({ message: 'Adresse email invalide.' }),
  need: z.string({ required_error: "Veuillez sélectionner la nature du besoin."}),
  workInterest: z.string({ required_error: 'Veuillez sélectionner un travail.' }),
  projectDescription: z.string().min(10, { message: 'La description doit contenir au moins 10 caractères.' }).max(500, { message: 'La description ne doit pas dépasser 500 caractères.' }),
  recaptchaToken: z.string().min(1, { message: 'Veuillez compléter le reCAPTCHA.' }),
});

interface ContactModalContentProps {
  subject?: string | null;
  need?: string | null;
}

const workOptionsByNeed = {
  "Image de Marque": [
    { value: "Choix du pack: 'Identité Express'", label: "Offre Starter ‘Identité Express’" },
    { value: "Choix du pack: 'Image Complète'", label: "Offre Signature ‘Image Complète’" },
    { value: "Choix du pack: 'Branding Stratégique'", label: "Offre Premium ‘Branding Stratégique’" },
  ],
  "Site Web": [
    { value: "Choix du pack: 'Site Starter'", label: "Offre Site Starter" },
    { value: "Choix du pack: 'Site Signature'", label: "Offre Impact Site Signature" },
    { value: "Choix du pack: 'Site Premium Évolutif'", label: "Offre Site Premium Évolutif" },
    { value: "Choix du pack: 'Site E-commerce'", label: "Offre Site E-commerce" },
  ],
  "Application Mobile": [
    { value: "Choix du pack: 'Application Mobile'", label: "Offre Présence Mobile" },
    { value: "Choix du pack: 'Application Pro'", label: "Offre d’Application Pro" },
    { value: "Choix du pack: 'Application Métier'", label: "Offre d’Application Métier" },
    { value: "Demande de devis Maintenance", label: "Option Maintenance / Évolutions" },
  ],
  "Accompagnement": [
    { value: "Choix du pack: 'Contenu Digital'", label: "Pack Starter l’Essentiel des Réseaux" },
    { value: "Choix du pack: 'Visibilité Pro'", label: "Pack Ambition la Visibilité Pro" },
    { value: "Choix du pack: 'Influence & Impact'", label: "Pack Premium ‘Influence & Impact’" },
  ],
  "Autre": [
    { value: "Autre", label: "Autre" }
  ],
};

type Need = keyof typeof workOptionsByNeed;

export function ContactModalContent({ subject, need }: ContactModalContentProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      email: '',
      projectDescription: '',
      workInterest: subject || '',
      need: need || '',
      recaptchaToken: '',
    },
  });

  const selectedNeed = form.watch('need') as Need | undefined;

  useEffect(() => {
    if (subject) {
      form.setValue('workInterest', subject);
    }
    if (need) {
      form.setValue('need', need as Need);
    }
  }, [subject, need, form]);

  useEffect(() => {
    if (selectedNeed && (!subject || form.getValues('need') !== need)) {
        form.setValue('workInterest', '');
    }
  }, [selectedNeed, form, subject, need]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(values);
      if (result.success) {
        toast({
          title: 'Message envoyé !',
          description: 'Nous vous répondrons dans les plus brefs délais.',
        });
        form.reset();
        recaptchaRef.current?.reset();
      } else {
        throw new Error(result.message || 'Email sending failed');
      }
    } catch (error: any) {
       toast({
        title: 'Erreur',
        description: error.message || "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <DialogContent className="sm:max-w-[625px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
                src="https://i.postimg.cc/9FZpzK2Q/Digitale-R-cup-r.png"
                alt="Logo background"
                width={300}
                height={300}
                className="opacity-5"
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
                          <Select onValueChange={field.onChange} value={field.value} disabled={!selectedNeed}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="— Sélectionnez un travail —" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {selectedNeed && workOptionsByNeed[selectedNeed] && workOptionsByNeed[selectedNeed].map(option => (
                                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                ))}
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
                    
                    <FormField
                        control={form.control}
                        name="recaptchaToken"
                        render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                    onChange={(token) => field.onChange(token)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? 'Envoi en cours...' : 'Demander un devis'}
                    </Button>
                </form>
            </Form>
        </div>
    </DialogContent>
  );
}
