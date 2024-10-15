'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Submission() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const guidelines = [
    {
      title: 'Submission Requirements',
      content:
        "All submitted papers must be original and exclusive to ICVIT'25. Simultaneous submissions to other journals or conferences are strictly prohibited. To maintain the integrity of the conference, we expect all papers to be based on unpublished original work. By submitting a paper, at least one of the authors must be committed to registering and presenting the paper at the conference.",
    },
    {
      title: 'Important Dates',
      content:
        'It is important to adhere to the provided deadlines. The deadlines for draft paper submission, notification of acceptance, camera-ready paper submission, and early registration can be found in the Important Dates section of the conference website. Keeping track of these dates will help ensure a smooth review process and successful participation.',
    },
    {
      title: 'Contact Information',
      content:
        'If you encounter any challenges during the submission process, our team is here to assist you. Please feel free to reach out to us via email at chennai.ICVIT@vit.ac.in. We are dedicated to providing timely support and resolving any issues you may face.',
    },
    {
      title: 'Peer Review and Plagiarism Check',
      content:
        'Quality and originality are paramount to us. Each submitted paper will undergo a thorough peer review by a minimum of three independent referees who are experts in the field. Additionally, all papers will undergo a comprehensive plagiarism check to ensure their authenticity and adherence to ethical standards.',
    },
    {
      title: 'Accepted Papers',
      content:
        'Upon acceptance, authors will be required to complete and sign a copyright form. Furthermore, presenting the accepted paper at the conference is mandatory. This practice fosters an environment of knowledge sharing and scholarly interaction. To maintain the academic integrity of the conference, we employ standard plagiarism detection tools to scrutinize all submissions. Any instance of plagiarism will result in rejection, regardless of the stage of review.',
    },
    {
      title: 'Manuscript Guidelines',
      content:
        'Submitted manuscripts should encompass a comprehensive and coherent body of work, presented in well-formatted English. Each manuscript should span a complete 6 pages, offering adequate space to delve into the details of the research. All submissions are to be made electronically through the designated platform, ensuring efficient processing and review.',
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className='py-12 space-y-8'
    >
      <h2 className='text-4xl font-bold text-primary-700 text-center mb-8'>
        ICVIT'25 Conference Paper Submission Guidelines
      </h2>

      <Accordion type='single' collapsible className='w-full'>
        {guidelines.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-xl font-semibold text-primary-700'>
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <p className='text-gray-700'>{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Card className='mt-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-primary-700'>Submission Links</CardTitle>
        </CardHeader>
        <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h3 className='text-xl font-bold text-primary-700 mb-2'>Manuscript Submission</h3>
            <Button asChild>
              <Link href='#'>Submit Manuscript</Link>
            </Button>
          </div>
          <div>
            <h3 className='text-xl font-bold text-primary-700 mb-2'>Manuscript Templates</h3>
            <div className='space-y-2'>
              <Button asChild variant='outline'>
                <Link href='#'>Download Word Template</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link href='#'>Download LaTeX Template</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
