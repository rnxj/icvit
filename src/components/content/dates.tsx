'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const importantDates = [
  {
    dates: ['3rd June 2024'],
    previouslyDecidedDates: [],
    event: 'Call for Papers',
  },
  {
    dates: ['25th September 2024 (Firm Extended)'],
    previouslyDecidedDates: ['1st September 2024', '20th September 2024'],
    event: 'Paper Submission Deadline',
  },
  {
    dates: ['10th October 2024 (Extended)'],
    previouslyDecidedDates: ['30th September 2024'],
    event: 'Acceptance Notification',
  },
  {
    dates: ['21st October 2024 (Extended)'],
    previouslyDecidedDates: ['15th October 2024'],
    event: 'Camera Ready Copy Submission',
  },
  {
    dates: ['5th February 2025'],
    previouslyDecidedDates: [],
    event: 'Registration Close',
  },
  {
    dates: ['14th & 15th February 2025'],
    previouslyDecidedDates: [],
    event: 'Conference',
  },
];

export function Dates() {
  const tableRef = useRef(null);
  const isInView = useInView(tableRef, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={tableRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className='py-12'
    >
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-3xl font-bold text-primary-700'>Important Dates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='overflow-x-auto'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-right w-1/2'>Date</TableHead>
                  <TableHead className='text-left w-1/2'>Event</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {importantDates.map((dateInfo, index) => (
                  <TableRow key={index}>
                    <TableCell className='text-right'>
                      {dateInfo.previouslyDecidedDates.map((prevDate, idx) => (
                        <div key={idx} className='line-through text-red-500 text-sm'>
                          {prevDate}
                        </div>
                      ))}
                      {dateInfo.dates.map((currentDate, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: -10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className='font-semibold text-primary-700'
                        >
                          {currentDate}
                        </motion.div>
                      ))}
                    </TableCell>
                    <TableCell className='text-left'>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {dateInfo.event}
                        {dateInfo.dates[0].includes('Extended') && (
                          <Badge
                            variant='outline'
                            className='ml-2 bg-yellow-100 text-yellow-800 border-yellow-300'
                          >
                            Extended
                          </Badge>
                        )}
                      </motion.div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
