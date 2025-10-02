import { Button } from '@/components/ui/button';
import { ContactModalTrigger } from '@/components/contact-modal-trigger';

export function CtaSection() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Prêt à vous lancer?</h2>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
            Envie de voir ce que nous pouvons construire ensemble ? 👉 Contactez-nous dès aujourd’hui pour une première consultation gratuite.
          </p>
          <ContactModalTrigger asChild>
            <Button size="lg" variant="secondary" className="mt-8 text-lg bg-background text-foreground hover:bg-background/90">
              Planifiez votre consultation
            </Button>
          </ContactModalTrigger>
        </div>
      </div>
    </section>
  );
}
