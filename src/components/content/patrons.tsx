'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const committeeMembers = {
  chiefPatron: {
    name: 'Dr. G. Viswanathan',
    title: 'Chancellor, VIT',
    imageUrl: '/patrons/viswanathan.png',
  },
  patrons: [
    {
      name: 'Mr. Sankar Viswanathan',
      title: 'Vice-President, VIT',
      imageUrl: '/patrons/sankar_viswanathan.png',
    },
    {
      name: 'Dr. Sekar Viswanathan',
      title: 'Vice-President, VIT',
      imageUrl: '/patrons/sekar_viswanathan.png',
    },
    {
      name: 'Dr. G V Selvam',
      title: 'Vice-President, VIT',
      imageUrl: '/patrons/selvam.png',
    },
    {
      name: 'Dr. Kadhambari S. Viswanathan',
      title: 'Assistant Vice President, VIT',
      imageUrl: '/patrons/kadhambari_viswanathan.png',
    },
    {
      name: 'Dr. Sandhya Pentareddy',
      title: 'Executive Director, VIT',
      imageUrl: '/patrons/sandhya_pentareddy.png',
    },
    {
      name: 'Dr. V. S. Kanchana Bhaaskaran',
      title: 'Vice-Chancellor, VIT',
      imageUrl: '/patrons/kanchana_bhaaskaran.png',
    },
    {
      name: 'Dr. Thyagarajan T',
      title: 'Pro-Vice Chancellor, VIT',
      imageUrl: '/patrons/thyagarajan.png',
    },
    {
      name: 'Dr. P.K.Manoharan',
      title: 'Additional Registrar, VIT',
      imageUrl: '/patrons/manoharan.png',
    },
    {
      name: 'Dr. S.P. Thyagarajan',
      title: 'Distinguished Professor & Advisor to Chancellor, VIT',
      imageUrl: '/patrons/spthyagarajan.png',
    },
  ],
};

export function Patrons() {
  const chiefPatronRef = useRef(null);
  const patronsRef = useRef(null);

  const isChiefPatronInView = useInView(chiefPatronRef, { once: true, amount: 0.1 });
  const arePatronsInView = useInView(patronsRef, { once: true, amount: 0.1 });

  return (
    <div className='py-12 space-y-12'>
      <motion.section
        ref={chiefPatronRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isChiefPatronInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-bold text-purple-700 text-center mb-4'>Chief Patron</h2>
          <Image
            src={committeeMembers.chiefPatron.imageUrl}
            alt={committeeMembers.chiefPatron.name}
            width={250}
            height={250}
            className='rounded-lg mb-4'
          />
          <h3 className='text-xl font-semibold text-purple-700'>
            {committeeMembers.chiefPatron.name}
          </h3>
          <p className='text-gray-600'>{committeeMembers.chiefPatron.title}</p>
        </div>
      </motion.section>

      <motion.section
        ref={patronsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={arePatronsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className='text-3xl font-bold text-purple-700 text-center'>
              Patrons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {committeeMembers.patrons.map((patron, index) => (
                <motion.div
                  key={index}
                  className='flex flex-col items-center'
                  initial={{ opacity: 0, y: 20 }}
                  animate={arePatronsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Image
                    src={patron.imageUrl}
                    alt={patron.name}
                    width={200}
                    height={200}
                    className='rounded-lg mb-4'
                  />
                  <h3 className='text-lg font-semibold text-purple-700 text-center'>
                    {patron.name}
                  </h3>
                  <p className='text-gray-600 text-center'>{patron.title}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
