'use client';

import { motion, useInView } from 'framer-motion';
import { MailIcon, MapPinIcon } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactUs() {
  const sectionRef = useRef(null);
  const contactInfoRef = useRef(null);
  const mapRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isContactInfoInView = useInView(contactInfoRef, { once: true, amount: 0.1 });
  const isMapInView = useInView(mapRef, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className='py-12'
    >
      <Card className='overflow-hidden'>
        <CardHeader className='bg-purple-100'>
          <CardTitle className='text-3xl font-bold text-purple-700'>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Contact Information */}
            <motion.div
              ref={contactInfoRef}
              initial={{ opacity: 0, x: -20 }}
              animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex flex-col space-y-6'
            >
              <div className='flex items-center space-x-4'>
                <MailIcon className='w-6 h-6 text-purple-600' />
                <Button
                  asChild
                  variant='link'
                  className='p-0 h-auto font-semibold text-purple-700 hover:text-purple-900'
                >
                  <Link href='mailto:chennai.icvit@vit.ac.in'>chennai.icvit@vit.ac.in</Link>
                </Button>
              </div>
              <div className='flex items-start space-x-4'>
                <MapPinIcon className='w-6 h-6 text-purple-600 flex-shrink-0 mt-1' />
                <p className='text-gray-700'>
                  Vellore Institute of Technology, Vandalur - Kelambakkam Road, Chennai, Tamil Nadu
                  - 600 127
                </p>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0, x: 20 }}
              animate={isMapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='w-full h-64 md:h-full rounded-lg overflow-hidden shadow-md'
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7779.866183908249!2d80.170269!3d12.847598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20Chennai!5e0!3m2!1sen!2sin!4v1729022276864!5m2!1sen!2sin'
                width='100%'
                height='100%'
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='VIT Chennai Location'
              ></iframe>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
