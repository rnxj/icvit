'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Patrons', href: '#patrons' },
  { name: 'Dates', href: '#dates' },
  { name: 'Submission', href: '#submission' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Committee', href: '#committee' },
  { name: 'Proceedings', href: '#proceedings' },
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

  return (
    <div className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-7xl'>
      <nav
        className={`transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-white/70' : 'bg-white/30'
        } backdrop-blur-md shadow-lg rounded-full border border-purple-100 py-2 px-4`}
      >
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='text-2xl font-bold text-purple-700 whitespace-nowrap'>
              ICVIT&apos;25
            </Link>
            <div className='hidden lg:flex items-center space-x-1'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-purple-700 hover:text-purple-900 px-2 py-1 rounded-full text-sm font-medium transition-colors duration-200'
                >
                  {item.name}
                </Link>
              ))}
              <Button className='bg-purple-600 text-white hover:bg-purple-700 rounded-full ml-2'>
                Register
              </Button>
            </div>
            <div className='lg:hidden'>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant='ghost' size='icon' className='text-purple-700'>
                    <Menu className='h-6 w-6' />
                    <span className='sr-only'>Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side='right' className='w-[300px] sm:w-[400px] [&>button]:hidden'>
                  <nav className='flex flex-col h-full'>
                    <div className='flex items-center justify-between mb-8'>
                      <Link
                        href='/'
                        className='text-2xl font-bold text-purple-700'
                        onClick={() => setIsOpen(false)}
                      >
                        ICVIT&apos;25
                      </Link>
                      <Button variant='ghost' size='icon' onClick={() => setIsOpen(false)}>
                        <X className='h-6 w-6' />
                        <span className='sr-only'>Close menu</span>
                      </Button>
                    </div>
                    <div className='flex flex-col space-y-4'>
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className='text-purple-700 hover:text-purple-900 px-3 py-2 rounded-md text-sm font-medium'
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Button
                        className='bg-purple-600 text-white hover:bg-purple-700 mt-4 rounded-full'
                        onClick={() => setIsOpen(false)}
                      >
                        Register Now
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
