import Link from 'next/link';
import { Instagram, Mail, Phone, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const footerLinks = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#experts', label: 'Nos Experts' },
  { href: '/#services', label: 'Nos Services' },
  { href: '/#avis', label: 'Avis' },
];

const legalLinks = [
    { href: '/legal#mentions-legales', label: 'Mentions Légales' },
    { href: '/legal#cgu', label: 'CGU' },
    { href: '/legal#cgv', label: 'CGV' },
    { href: '/legal#politique-de-confidentialite', label: 'Politique de confidentialité' },
];

const socialLinks = [
  { href: 'https://www.instagram.com/croissancedigitale.pro?igsh=MWR3YmJ2NDZoenBrdw==', icon: Instagram, label: 'Instagram' },
  { href: 'mailto:contact.croissancedigitale@gmail.com', icon: Mail, label: 'contact.croissancedigitale@gmail.com' },
  { href: 'https://wa.me/590690723745', icon: MessageSquare, label: 'WhatsApp' },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-start">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <Image src="https://i.postimg.cc/9FZpzK2Q/Digitale-R-cup-r.png" alt="Croissance Digitale Logo" width={40} height={40} className="h-10 w-10 text-primary" />
                        <span className="font-headline text-xl font-bold">Croissance Digitale</span>
                    </Link>
                    <p className="text-muted-foreground text-sm">Façonner votre avenir digital.</p>
                </div>

                <div>
                    <h3 className="font-headline text-lg font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        {footerLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-headline text-lg font-semibold mb-4">Légal</h3>
                    <ul className="space-y-2">
                        {legalLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-headline text-lg font-semibold mb-4">Contact rapide</h3>
                     <ul className="space-y-2">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                                    <link.icon />
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                <p>© 2025 Croissance Digitale – Tous droits réservés.</p>
            </div>
        </div>
    </footer>
  );
}
