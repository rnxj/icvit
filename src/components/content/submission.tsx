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
        "All submissions to ICVIT'25 must be original and not under consideration for publication elsewhere. Papers submitted to other conferences or journals simultaneously will not be accepted. To uphold the conference's integrity, we require that all papers be based on previously unpublished work. Additionally, at least one author of each accepted paper must register for and present the paper at the conference.",
    },
    {
      title: 'Important Dates',
      content:
        'Adherence to the specified deadlines is essential. Key dates for draft paper submission, notification of acceptance, camera-ready paper submission, and early registration are listed in the Important Dates section of the conference website. Observing these deadlines is crucial to facilitate a smooth review process and ensure successful participation in the conference.',
    },
    {
      title: 'Contact Information',
      content:
        'If you encounter any difficulties during the submission process, please do not hesitate to contact us at chennai.icvit@vit.ac.in. Our team is committed to providing prompt assistance and ensuring that any issues are addressed efficiently.',
    },
    {
      title: 'Peer Review and Plagiarism Check',
      content:
        'We prioritize quality and originality, subjecting each submitted paper to a rigorous peer review by at least three independent field experts and a thorough plagiarism check to confirm authenticity and ethical compliance. Any instance of plagiarism will result in immediate rejection at any review stage.',
    },
    {
      title: 'Accepted Papers',
      content:
        'Accepted authors must sign a copyright form and present their paper at the conference to promote knowledge sharing and scholarly engagement. To uphold academic integrity, all submissions undergo scrutiny using standard plagiarism detection tools, with any detected plagiarism leading to immediate rejection at any review stage.',
    },
    {
      title: 'Manuscript Guidelines',
      content:
        'Manuscripts must present a thorough and cohesive body of work in well-formatted English, spanning exactly 6 pages to fully explore the research details. All submissions should be made electronically via the designated platform for streamlined processing and review.',
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

      <Card>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-primary-700'>
            Author Guidelines for Conference Paper Submission
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className='space-y-4 list-decimal pl-5'>
            <li className='text-gray-700'>
              <span className='font-semibold'>Manuscript Preparation</span>
              <ul className='list-disc pl-5 mt-1 space-y-1'>
                <li>
                  Submissions must represent a comprehensive and cohesive body of research, written
                  in clear, well-formatted English.
                </li>
                <li>
                  Each manuscript should be exactly 6 pages in length, providing sufficient space to
                  elaborate on research details.
                </li>
                <li>
                  Ensure the manuscript adheres to the conference's formatting requirements (refer
                  to the templates available below).
                </li>
              </ul>
            </li>
            <li className='text-gray-700'>
              <span className='font-semibold'>Submission Process</span>
              <ul className='list-disc pl-5 mt-1 space-y-1'>
                <li>
                  All manuscripts must be submitted electronically through the designated CMT
                  platform to facilitate efficient processing and review.
                </li>
                <li>Submissions sent via other methods will not be accepted.</li>
              </ul>
            </li>
            <li className='text-gray-700'>
              <span className='font-semibold'>Peer Review and Plagiarism Check</span>
              <ul className='list-disc pl-5 mt-1 space-y-1'>
                <li>
                  Each submitted paper will undergo a rigorous peer review by at least three
                  independent experts in the field to ensure quality and originality.
                </li>
                <li>
                  All submissions will be subject to a comprehensive plagiarism check using standard
                  detection tools to verify authenticity and adherence to ethical standards.
                </li>
                <li>
                  Any instance of plagiarism will result in immediate rejection, regardless of the
                  review stage.
                </li>
              </ul>
            </li>
            <li className='text-gray-700'>
              <span className='font-semibold'>Post-Acceptance Requirements</span>
              <ul className='list-disc pl-5 mt-1 space-y-1'>
                <li>Upon acceptance, authors must complete and sign a copyright form.</li>
                <li>
                  Authors are required to present their accepted paper at the conference to foster
                  knowledge sharing and scholarly interaction.
                </li>
              </ul>
            </li>
            <li className='text-gray-700'>
              <span className='font-semibold'>Commitment to Academic Integrity</span>
              <ul className='list-disc pl-5 mt-1 space-y-1'>
                <li>
                  The conference upholds the highest standards of academic integrity. Submissions
                  must be original and not previously published or under consideration elsewhere.
                </li>
                <li>
                  Failure to comply with these guidelines, including plagiarism or failure to
                  present, will result in rejection or disqualification.
                </li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card className='mt-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-primary-700'>Submission Links</CardTitle>
        </CardHeader>
        <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h3 className='text-xl font-bold text-primary-700 mb-2'>Manuscript Submission</h3>
            <Button asChild>
              <Link href='#'>Submit Manuscript (CMT)</Link>
            </Button>
            <p className='mt-2 text-sm text-gray-500'>
              All manuscripts must be submitted through the CMT platform.
            </p>
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
