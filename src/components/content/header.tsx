'use client';

import { motion, useInView } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export function Header() {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const instructionsRef = useRef(null);

  const isLeftColumnInView = useInView(leftColumnRef, { once: true, amount: 0.1 });
  const isRightColumnInView = useInView(rightColumnRef, { once: true, amount: 0.1 });
  const isInstructionsInView = useInView(instructionsRef, { once: true, amount: 0.1 });

  return (
    <div className='max-w-7xl mx-auto pb-12'>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
        {/* Left Column */}
        <motion.div
          ref={leftColumnRef}
          className='lg:col-span-3 space-y-8'
          initial={{ opacity: 0, y: 20 }}
          animate={isLeftColumnInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex flex-wrap items-center gap-4'>
            <Badge variant='outline' className='flex items-center gap-2 text-lg py-2 px-4'>
              <Calendar className='text-blue-600' />
              <span>18th & 19th September 2025</span>
            </Badge>
            <Badge variant='outline' className='flex items-center gap-2 text-lg py-2 px-4'>
              <Clock className='text-blue-600' />
              <span>8:00 AM</span>
            </Badge>
          </div>

          {/* <div className='flex flex-wrap items-center gap-6'>
            <Image
              src='/logos/serb.png'
              alt='SERB Logo'
              width={100}
              height={50}
              className='object-contain'
            />
            <Image
              src='/logos/dst.png'
              alt='DST Logo'
              width={250}
              height={50}
              className='object-contain'
            />
          </div>

          <Badge variant='secondary' className='text-lg py-2 px-4'>
            DST - SERB, New Delhi Sponsored
          </Badge> */}

          <h1 className='text-2xl font-bold text-primary-800 leading-tight'>
            1st International Conference on adVanced Intelligent Technologies (ICVIT'25)
          </h1>

          <h2 className='text-xl font-semibold text-gray-700'>
            Theme: Fostering Technological Advancement through Innovations in Artificial
            Intelligence, Internet of Things, Robotics, and Sustainable Solutions
          </h2>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='text-xl font-bold mb-2'>Organized By</h3>
              <p className='text-primary-700 font-semibold'>
                School of Computer Science and Engineering (SCOPE), Vellore Institute of Technology,
                Chennai, India
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='text-xl font-bold mb-2'>In Collaboration With</h3>
              <ul className='space-y-2'>
                <li className='flex items-center gap-2'>
                  <span className='w-3 h-3 rounded-full bg-red-600'></span>
                  <span className='font-semibold'>
                    Head for the School of Computing and IT, Taylor's University
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column */}
        <motion.div
          ref={rightColumnRef}
          className='lg:col-span-2 space-y-8 flex flex-col justify-between items-center'
          initial={{ opacity: 0, y: 20 }}
          animate={isRightColumnInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src='/vit.jpg'
            alt='Conference Venue'
            width={1000}
            height={1000}
            className='rounded-lg shadow-lg object-cover w-full h-64'
          />
          <Image
            src='/logos/vit_chn.png'
            alt='VIT Chennai Logo'
            width={400}
            height={50}
            className='object-contain'
          />
          {/* <div className='grid grid-cols-2 gap-6 justify-items-center'>
            <Image
              src='/logos/uipath.png'
              alt='UiPath Logo'
              width={250}
              height={50}
              className='object-contain'
            />
            <Image
              src='/logos/upm.png'
              alt='UPM Logo'
              width={150}
              height={50}
              className='object-contain'
            />
            <Image
              src='/logos/bis.png'
              alt='BIS Logo'
              width={250}
              height={50}
              className='object-contain'
            />
          </div> */}
        </motion.div>

        {/* Instructions & Info Section */}
        <motion.div
          ref={instructionsRef}
          className='col-span-full mt-12'
          initial={{ opacity: 0, y: 20 }}
          animate={isInstructionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className='text-3xl font-bold text-primary-700 mb-8'>Instructions & Info</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[
              { title: 'Instruction to Authors', link: '#' },
              { title: 'Online Presentation Track Details', link: '#' },
              { title: "ICVIT'25 Conference Schedule", link: '#' },
              { title: 'Offline Presentation Track Details', link: '#' },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className='pt-6'>
                  <h3 className='text-xl font-semibold text-orange-500 mb-4'>{item.title}</h3>
                  <a href={item.link} className='text-blue-600 hover:underline'>
                    View Details (Coming soon)
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
