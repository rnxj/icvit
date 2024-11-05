'use client';

import { motion, useInView } from 'framer-motion';
import { MicVocalIcon } from 'lucide-react';
import { useRef } from 'react';

import { Card, CardContent } from '@/components/ui/card';

type CommitteeMember = {
  name: string;
  title: string;
  affiliation: string;
};

type CommitteeData = {
  [key: string]: CommitteeMember[];
};

const committeeData: CommitteeData = {
  // 'General Committee': [
  //   {
  //     name: 'Dr. Ganesan R',
  //     title: 'Dean, SCOPE',
  //     affiliation: 'Vellore Institute of Technology, Chennai',
  //   },
  //   {
  //     name: "Prof. Dato' Dr Shamala Subramaniam",
  //     title: 'Dean',
  //     affiliation: 'Universiti Putra Malaysia, Malaysia',
  //   },
  //   {
  //     name: 'Mrs.Bhavani. G',
  //     title: 'Scientist F/ Senior Directorand Head Chennai Branch Office',
  //     affiliation: 'BIS',
  //   },
  // ],
  // 'Program Chair Committee': [
  //   {
  //     name: 'Dr. Vallidevi K',
  //     title: 'Associate Professor, SCOPE',
  //     affiliation: 'Vellore Institute of Technology, Chennai',
  //   },
  //   {
  //     name: 'Dr. Suganya R',
  //     title: 'Associate Professor, SCOPE',
  //     affiliation: 'Vellore Institute of Technology, Chennai',
  //   },
  //   {
  //     name: 'Dr. Abdullah Muhamed',
  //     title: 'Deputy Dean, FSKTM',
  //     affiliation: 'Universiti Putra Malaysia, Malaysia',
  //   },
  // ],
  // 'Program Committee': [
  //   {
  //     name: 'Dr. Janaki Meena M',
  //     title: 'Professor',
  //     affiliation: 'Vellore Institute of Technology, Chennai',
  //   },
  //   {
  //     name: 'Dr. Jeganathan L',
  //     title: 'Professor',
  //     affiliation: 'Vellore Institute of Technology, Chennai',
  //   },
  //   {
  //     name: 'Dr. Maheswari N',
  //     title: 'Professor',
  //     affiliation: 'Vellore Institute of Technology, Chennai',
  //   },
  // ],
  // 'Organizing Committee': [
  //   {
  //     name: 'Dr. Rajalakshmi R',
  //     title: 'Professor',
  //     affiliation: 'Vellore Institute of Technology, Chennai',
  //   },
  //   {
  //     name: 'Dr. Sakthivel V',
  //     title: 'Assistant Professor',
  //     affiliation: 'Vellore Institute of Technology, Chennai',
  //   },
  //   {
  //     name: 'Dr. Swaminathan A',
  //     title: 'Assistant Professor',
  //     affiliation: 'Vellore Institute of Technology, Chennai',
  //   },
  // ],
  // 'Advisory Committee': [
  //   {
  //     name: 'Dr. Chockalingam Aravind Vaithilingam',
  //     title: '',
  //     affiliation: "Taylor's University, Malaysia",
  //   },
  //   { name: 'Dr. Subramaniam Ganesan', title: '', affiliation: 'Oakland University, Michigan' },
  //   {
  //     name: 'Dr. Xavier Fernando',
  //     title: '',
  //     affiliation: 'Toronto Metropolitan University, Canada',
  //   },
  // ],
};

export function ConferenceCommittee() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className='py-12 space-y-8'
    >
      <h1 className='text-4xl font-bold text-primary-700 text-center'>Conference Committee</h1>
      <Card>
        <CardContent className='p-6'>
          <div className='flex flex-col items-center space-y-4'>
            <div className='w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center'>
              <MicVocalIcon className='w-12 h-12 text-primary-600' />
            </div>
            <p className='text-gray-500 text-center'>
              Committee details will be updated soon. Please check back later.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
