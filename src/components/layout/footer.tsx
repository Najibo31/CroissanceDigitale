import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

const footerLinks = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#experts', label: 'Nos Experts' },
  { href: '/#services', label: 'Nos Services' },
  { href: '/#avis', label: 'Avis' },
];

const legalLinks = [
    { href: '/mentions-legales', label: 'Mentions Légales' },
    { href: '/cgu', label: 'CGU' },
    { href: '/cgv', label: 'CGV' },
    { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
];

const socialLinks = [
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://wa.me/590690723745', icon: () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform fill-current"><title>WhatsApp</title><path d="M12.04 2.02c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.42 1.29 4.89L2.02 22l5.25-1.38c1.41.78 3.02 1.21 4.77 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM12.04 20.1c-1.6 0-3.14-.4-4.51-1.11L7 18.73l-3.57.94.96-3.49-0.27-.42c-.83-1.4-1.28-3.01-1.28-4.71 0-4.54 3.69-8.22 8.23-8.22 4.54 0 8.23 3.68 8.23 8.22-.01 4.54-3.69 8.22-8.23 8.22zm4.52-6.13c-.25-.12-1.47-.72-1.7-.85-.23-.12-.39-.19-.56.12-.17.31-.64.85-.79 1.02-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.02-.38.1-.51.11-.11.25-.29.37-.44s.17-.21.25-.35c.08-.14.04-.26-.02-.38-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.3 0-.46 0-.17 0-.43.06-.66.31-.23.25-.87.85-1.06 2.07s-.2 2.4.04 2.65c.23.25 1.24 1.9 3 2.89.43.25.76.4 1.02.51.51.21 1.02.18 1.41.11.43-.08 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18s-.22-.16-.47-.28z"/></svg>, label: 'WhatsApp' },
  { href: 'mailto:contact@croissancedigitale.com', icon: Mail, label: 'Mail' },
  { href: 'tel:+590690723745', icon: Phone, label: '+590 690 723745' },
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
