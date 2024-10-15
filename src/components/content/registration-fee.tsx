'use client';

import { motion, useInView } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function RegistrationFee() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className='py-12'
    >
      <h2 className='text-3xl font-bold text-purple-700 mb-4'>Registration Fee</h2>
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-1/3'>Category</TableHead>
              <TableHead className='w-1/3'>Indian Nationals (Rs)</TableHead>
              <TableHead className='w-1/3'>Foreign Nationals (USD)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>Research Scholars / Students</TableCell>
              <TableCell>Rs.4500 + 18% GST (Rs.5310)</TableCell>
              <TableCell>$70 + 18% GST ($83)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Academician</TableCell>
              <TableCell>Rs.7000 + 18% GST (Rs.8260)</TableCell>
              <TableCell>$150 + 18% GST ($177)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Industry Delegates</TableCell>
              <TableCell>Rs.10000 + 18% GST (Rs.11800)</TableCell>
              <TableCell>$200 + 18% GST ($236)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className='mt-6 space-y-4'>
        <div className='flex items-start space-x-2 text-sm text-gray-600'>
          <AlertCircle className='w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5' />
          <p>
            Registration fee doesn't cover bank charges and includes only participation &
            presentation to conference.
          </p>
        </div>

        <p className='text-purple-700 font-semibold'>
          Attractive rewards will be given for Best Papers
        </p>
      </div>

      <Card className='mt-8'>
        <CardHeader>
          <CardTitle className='text-xl font-semibold text-purple-700'>
            Payment Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>For Payment (After Acceptance of Article):</p>
          <Button asChild>
            <Link href='#'>Make Payment</Link>
          </Button>
          <p className='text-sm text-gray-600 mt-4'>
            Note: After linking to payment portal, choose ICVIT 2024 in the dropdown. Then select
            your appropriate registration category.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
