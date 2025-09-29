import { ContactForm } from '@/components/contact-form';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function ContactFormSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-10 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-11 w-full" />
      </div>
    </div>
  );
}


export default function ContactPage() {
  return (
    <div className="py-32 md:py-40 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground">Demande de Devis</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">Utilisez ce formulaire pour nous contacter et demander un devis personnalisé pour votre projet. Nous sommes impatients de découvrir vos idées !</p>
        </div>
        <Suspense fallback={<ContactFormSkeleton />}>
          <div className="max-w-4xl mx-auto">
              <ContactForm />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
