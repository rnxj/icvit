'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '#header' },
  { name: 'About', href: '#about' },
  { name: 'Patrons', href: '#patrons' },
  { name: 'Fee', href: '#fee' },
  { name: 'Dates', href: '#dates' },
  { name: 'Submission', href: '#submission' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Committee', href: '#committee' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-7xl'>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-white/70' : 'bg-white/30'
        } backdrop-blur-md shadow-lg rounded-full border border-primary-100 py-2 px-4`}
      >
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href='/' className='text-2xl font-bold text-primary-700 whitespace-nowrap'>
                ICVIT&apos;25
              </Link>
            </motion.div>
            <div className='hidden lg:flex items-center space-x-1'>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className='text-primary-700 hover:text-primary-900 px-2 py-1 rounded-full text-sm font-medium transition-colors duration-200'
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              >
                <Button className='text-white rounded-full ml-2'>Register</Button>
              </motion.div>
            </div>
            <div className='lg:hidden'>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <motion.button
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-primary-700'
                  >
                    <Menu className='h-6 w-6' />
                    <span className='sr-only'>Open menu</span>
                  </motion.button>
                </SheetTrigger>
                <SheetContent side='right' className='w-[300px] sm:w-[400px] [&>button]:hidden'>
                  <nav className='flex flex-col h-full'>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className='flex items-center justify-between mb-8'
                    >
                      <Link
                        href='/'
                        className='text-2xl font-bold text-primary-700'
                        onClick={() => setIsOpen(false)}
                      >
                        ICVIT&apos;25
                      </Link>
                      <Button variant='ghost' size='icon' onClick={() => setIsOpen(false)}>
                        <X className='h-6 w-6' />
                        <span className='sr-only'>Close menu</span>
                      </Button>
                    </motion.div>
                    <motion.div
                      initial='hidden'
                      animate='visible'
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                      className='flex flex-col space-y-4'
                    >
                      {navItems.map((item) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <a
                            href={item.href}
                            onClick={(e) => handleScrollToSection(e, item.href)}
                            className='text-primary-700 hover:text-primary-900 px-3 py-2 rounded-md text-sm font-medium'
                          >
                            {item.name}
                          </a>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button
                          className='bg-primary-600 text-white hover:bg-primary-700 mt-4 rounded-full'
                          onClick={() => setIsOpen(false)}
                        >
                          Register Now
                        </Button>
                      </motion.div>
                    </motion.div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
