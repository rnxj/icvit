'use client';

import { motion } from 'framer-motion';
import { Facebook, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-purple-900 text-white py-12'
    >
      <div className='container mx-auto px-4'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
          }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='text-xl font-bold mb-4'>ICVIT'25</h3>
            <p className='text-sm'>
              International Conference on adVanced Intelligent Technologies (ICVIT 2025)
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='hover:text-purple-300 transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-purple-300 transition-colors'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/registration' className='hover:text-purple-300 transition-colors'>
                  Registration
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-purple-300 transition-colors'>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className='text-xl font-bold mb-4'>Contact Us</h3>
            <p className='text-sm mb-2'>Vellore Institute of Technology, Chennai</p>
            <p className='text-sm mb-4'>Email: chennai.icvit@vit.ac.in</p>
            <motion.div
              className='flex space-x-4'
              initial='hidden'
              animate='visible'
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delayChildren: 0.3, staggerChildren: 0.2 },
                },
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <Link href='#' className='hover:text-purple-300 transition-colors'>
                  <Facebook size={20} />
                  <span className='sr-only'>Facebook</span>
                </Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <Link href='#' className='hover:text-purple-300 transition-colors'>
                  <Twitter size={20} />
                  <span className='sr-only'>Twitter</span>
                </Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <Link href='#' className='hover:text-purple-300 transition-colors'>
                  <Linkedin size={20} />
                  <span className='sr-only'>LinkedIn</span>
                </Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <Link
                  href='mailto:chennai.icvit@vit.ac.in'
                  className='hover:text-purple-300 transition-colors'
                >
                  <Mail size={20} />
                  <span className='sr-only'>Email</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='mt-8 pt-8 border-t border-purple-700 text-center'
        >
          <p className='text-sm'>&copy; {currentYear} ICVIT'25. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
