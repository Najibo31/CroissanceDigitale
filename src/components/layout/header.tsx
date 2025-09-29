'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';

const navLinks = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#experts', label: 'Nos Experts' },
  { href: '/#collaboration', label: 'Collaboration' },
  { href: '/#services', label: 'Nos Services' },
  { href: '/#avis', label: 'Avis' },
  { href: '/contactez-nous', label: 'Contactez-nous' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMenuOpen ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ transformOrigin: 'center' }}
              className="transform-gpu"
            >
              <Image src="https://i.postimg.cc/9FZpzK2Q/Digitale-R-cup-r.png" alt="Croissance Digitale Logo" width={40} height={40} className="h-10 w-10 text-primary" />
            </motion.div>
            <span className={cn("font-headline text-xl font-bold", isScrolled || isMenuOpen ? 'text-foreground' : 'text-white')}>Croissance Digitale</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button key={link.href} asChild variant="ghost" className={cn("hover:bg-transparent relative group/link text-base", isScrolled || isMenuOpen ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent')}>
                <Link href={link.href}>
                  {link.label}
                  <span className="absolute bottom-1.5 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-center" />
                </Link>
              </Button>
            ))}
            <div className={cn(isScrolled || isMenuOpen ? '' : 'text-white')}>
              <ThemeToggle />
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            <div className={cn(isScrolled || isMenuOpen ? '' : 'text-white')}>
              <ThemeToggle />
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className={cn(isScrolled || isMenuOpen ? 'text-foreground' : 'text-white')}>
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-sm"
      >
        <nav className="flex flex-col items-center gap-4 py-8">
          {navLinks.map((link) => (
            <Button key={link.href} asChild variant="ghost" className="text-lg" onClick={() => setIsMenuOpen(false)}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
