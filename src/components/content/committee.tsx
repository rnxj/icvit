'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type CommitteeMember = {
  name: string;
  title: string;
  affiliation: string;
};

type CommitteeData = {
  [key: string]: CommitteeMember[];
};

const committeeData: CommitteeData = {
  'General Committee': [
    {
      name: 'Dr. Ganesan R',
      title: 'Dean, SCOPE',
      affiliation: 'Vellore Institute of Technology, Chennai',
    },
    {
      name: "Prof. Dato' Dr Shamala Subramaniam",
      title: 'Dean',
      affiliation: 'Universiti Putra Malaysia, Malaysia',
    },
    {
      name: 'Mrs.Bhavani. G',
      title: 'Scientist F/ Senior Directorand Head Chennai Branch Office',
      affiliation: 'BIS',
    },
  ],
  'Program Chair Committee': [
    {
      name: 'Dr. Vallidevi K',
      title: 'Associate Professor, SCOPE',
      affiliation: 'Vellore Institute of Technology, Chennai',
    },
    {
      name: 'Dr. Suganya R',
      title: 'Associate Professor, SCOPE',
      affiliation: 'Vellore Institute of Technology, Chennai',
    },
    {
      name: 'Dr. Abdullah Muhamed',
      title: 'Deputy Dean, FSKTM',
      affiliation: 'Universiti Putra Malaysia, Malaysia',
    },
  ],
  'Program Committee': [
    {
      name: 'Dr. Janaki Meena M',
      title: 'Professor',
      affiliation: 'Vellore Institute of Technology, Chennai',
    },
    {
      name: 'Dr. Jeganathan L',
      title: 'Professor',
      affiliation: 'Vellore Institute of Technology, Chennai',
    },
    {
      name: 'Dr. Maheswari N',
      title: 'Professor',
      affiliation: 'Vellore Institute of Technology, Chennai',
    },
  ],
  'Organizing Committee': [
    {
      name: 'Dr. Rajalakshmi R',
      title: 'Professor',
      affiliation: 'Vellore Institute of Technology, Chennai',
    },
    {
      name: 'Dr. Sakthivel V',
      title: 'Assistant Professor',
      affiliation: 'Vellore Institute of Technology, Chennai',
    },
    {
      name: 'Dr. Swaminathan A',
      title: 'Assistant Professor',
      affiliation: 'Vellore Institute of Technology, Chennai',
    },
  ],
  'Advisory Committee': [
    {
      name: 'Dr. Chockalingam Aravind Vaithilingam',
      title: '',
      affiliation: "Taylor's University, Malaysia",
    },
    { name: 'Dr. Subramaniam Ganesan', title: '', affiliation: 'Oakland University, Michigan' },
    {
      name: 'Dr. Xavier Fernando',
      title: '',
      affiliation: 'Toronto Metropolitan University, Canada',
    },
  ],
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
      <Tabs defaultValue='General Committee' className='w-full'>
        <TabsList className='grid grid-cols-2 lg:flex lg:flex-row w-full sm:w-auto mb-4 sm:mb-6 h-auto bg-transparent'>
          {Object.keys(committeeData).map((committee) => (
            <TabsTrigger
              key={committee}
              value={committee}
              className='px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ease-in-out hover:bg-primary-100 data-[state=active]:bg-primary-200 data-[state=active]:text-primary-800'
            >
              {committee}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(committeeData).map(([committee, members]) => (
          <TabsContent key={committee} value={committee}>
            <Card className='overflow-hidden'>
              <CardContent className='p-6'>
                <ScrollArea className='h-[calc(3*5.5rem)] md:h-[calc(3*4.5rem)] pr-4'>
                  <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 gap-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {members.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className='p-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-primary-100 hover:shadow-md border border-primary-200'
                      >
                        <div className='text-base md:text-lg'>
                          <span className='font-semibold text-primary-700'>{member.name}</span>
                          {member.title && (
                            <span className='text-gray-600 ml-2 text-sm md:text-base'>
                              • {member.title}
                            </span>
                          )}
                        </div>
                        {member.affiliation && (
                          <div className='text-sm text-gray-500 mt-1'>{member.affiliation}</div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
}
