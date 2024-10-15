'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { Badge } from '@/components/ui/badge';

const speakers = [
  {
    name: "Prof. Dato' Dr. Shamala K. Subramaniam",
    title: 'Professor & Dean',
    affiliation:
      'Department of Communication Technology and Network, Faculty of Computer Science and Information Technology, Universiti Putra Malaysia, Malaysia',
    imageUrl: '/speakers/shamala.png',
  },
  {
    name: 'Mrs. Bhavani G.',
    title: 'Scientist-F/Senior Director & Head',
    affiliation: 'Chennai Branch Office, BIS',
    imageUrl: '/speakers/bhavani.png',
  },
  {
    name: 'Dr. Shriram K Vasudevan',
    title: 'FIE, FIETE, SMIEEE, Intel Certified Instructor, NASSCOM External Maker Expert (XME)',
    affiliation:
      'Former ACM Distinguished Speaker, Intel Champion IoT Innovator, NVIDIA DLI Instructor',
    topic: "The AI PC - let's unleash the complete AI Potential",
    imageUrl: '/speakers/shriram.png',
  },
  {
    name: 'Dr. Sumitra.S',
    title: 'Associate Professor',
    affiliation:
      'Department of Mathematics, Indian Institute of Space Science and Technology, Thiruvananthapuram, Kerala',
    topic:
      'Brain-Computer Interfaces and Beyond: Machine Learning Applications for Sustainable Development',
    imageUrl: '/speakers/sumitra.png',
  },
  {
    name: 'Dr. Sudarsun Santhiappan',
    title: 'Chief Scientific Officer and Co-Founder',
    affiliation: 'Buddi.AI, Chennai, Tamilnadu',
    topic: 'AI for Healthcare - Opportunities with Clinical Language Understanding',
    imageUrl: '/speakers/sudarsun.png',
  },
];

export function KeynoteSpeakers() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className='py-12 bg-gradient-to-b from-primary-50 to-white rounded-md'>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className='container mx-auto px-4'
      >
        <h2 className='text-4xl font-bold text-primary-700 mb-12 text-center'>Keynote Speakers</h2>

        <div className='space-y-8'>
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <div className='md:w-1/4 flex justify-center mb-4 md:mb-0'>
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  width={150}
                  height={150}
                  className='rounded-full object-cover border-4 border-primary-200'
                />
              </div>
              <div className='md:w-3/4 md:pl-6'>
                <h3 className='text-2xl font-bold text-primary-700 mb-2'>{speaker.name}</h3>
                <p className='text-lg text-gray-700 mb-1'>{speaker.title}</p>
                <p className='text-md text-gray-600 mb-3'>{speaker.affiliation}</p>
                {speaker.topic && (
                  <div>
                    <Badge variant='secondary' className='mb-2'>
                      Keynote Topic
                    </Badge>
                    <p className='text-md text-gray-800 italic'>"{speaker.topic}"</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
