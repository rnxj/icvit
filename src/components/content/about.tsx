'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AssociationPartner {
  name: string;
  description: string;
  logoUrl: string;
  logoAlt: string;
  readMoreLink: string;
}

const associationPartners: AssociationPartner[] = [
  {
    name: 'Universiti Putra Malaysia (UPM)',
    description:
      'UPM is the only university that leads in the field of agriculture, which is not limited to food crops, including animal husbandry, veterinary medicine, and forestry, in addition to exploring disciplines that are relevant to the needs of society and the country. Faculty of Computer Science and Information Technology is located next to the lake located at UPM\'s Main Gate. This faculty consists of four departments namely the Department of Computer Science, Department of Multimedia, Department of Software Engineering and Information System, and the Department of Communication Technology and Network. Faculty of Computer Science and Information Technology is the first faculty to introduce "Green IT".',
    logoUrl: '/logos/upm.png',
    logoAlt: 'UPM Logo',
    readMoreLink: 'https://www.upm.edu.my/?L=en',
  },
  {
    name: 'Bureau of Indian Standards (BIS)',
    description:
      'BIS is the National Standard Body of India established under the BIS Act 2016 for the harmonious development of the activities of standardization, marking, and quality certification of goods and for matters connected therewith or incidental thereto. BIS has been providing traceability and tangibility benefits to the national economy in a number of ways by providing safe reliable quality goods; minimizing health hazards to consumers; promoting exports and import substitutes; control over proliferation of varieties etc. through standardization, certification, and testing',
    logoUrl: '/logos/bis.png',
    logoAlt: 'BIS Logo',
    readMoreLink: 'https://www.bis.gov.in/',
  },
  {
    name: 'UiPath Academic Alliance',
    description:
      'Automation and AI offer unprecedented opportunities to innovate. UiPath enables our customers to tap into this power with our industry-leading AI-powered enterprise automation technology. We are committed to promoting and maintaining an ethical workplace, protecting our customers data, managing risks, and building ongoing stakeholder value through the practice of good governance and oversight',
    logoUrl: '/logos/uipath.png',
    logoAlt: 'UiPath Academic Alliance Logo',
    readMoreLink: 'https://www.uipath.com/',
  },
];

const conferenceObjectives = [
  'To provide a platform for researchers, scholars, and innovators to present their latest findings and breakthroughs in the fields of computing and technology.',
  'To facilitate discussions and sessions focused on emerging trends and technologies such as artificial intelligence, quantum computing, blockchain, internet of things (IoT), etc.',
  'To explore innovative approaches in automation combined with intelligent methodologies, encompassing the latest advancements in computing.',
];

const conferenceTracks = [
  {
    title: 'Artificial Intelligence and Machine Learning Advances',
    topics: [
      'Deep Learning Techniques and Architectures',
      'Reinforcement Learning and Decision-making Systems',
      'Transfer Learning, Few-shot, and Zero-shot Learning',
      'AI for Natural Language Processing and Understanding',
    ],
  },
  {
    title: 'Generative AI and Creative Intelligence',
    topics: [
      'Generative Adversarial Networks (GANs) and Diffusion Models',
      'Creative AI in Art, Music, and Content Generation',
      'Applications of Generative AI with Knowledge Graphs',
      'Generative AI for Scientific Research and Innovation',
    ],
  },
  {
    title: 'Intelligent Systems, Robotics, and Autonomous Agents',
    topics: [
      'Robotics: Perception, Planning, and Control',
      'Human-Robot Interaction and Collaborative Robotics',
      'Autonomous Vehicles and Intelligent Transportation',
      'Multi-agent Systems and Swarm Intelligence',
    ],
  },
  {
    title: 'Quantum Computing, Neuromorphic Computing, and Emerging Technologies',
    topics: [
      'Quantum Algorithms and Quantum Machine Learning',
      'Neuromorphic Computing and Brain-inspired AI',
      'Applications of Quantum Computing in Optimization',
      'Emerging Hardware for AI: GPUs, TPUs, and Beyond',
    ],
  },
  {
    title: 'Internet of Things (IoT) and Edge Computing',
    topics: [
      'Intelligent IoT Solutions and Smart Sensors',
      'AI at the Edge for Real-time Decision Making',
      'IoT-based Cyber-Physical Systems',
      'Applications of Edge Computing in Industry 4.0',
    ],
  },
];

export function About() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const isInView1 = useInView(section1Ref, { once: true, amount: 0.1 });
  const isInView2 = useInView(section2Ref, { once: true, amount: 0.1 });
  const isInView3 = useInView(section3Ref, { once: true, amount: 0.1 });
  const isInView4 = useInView(section4Ref, { once: true, amount: 0.1 });
  const isInView5 = useInView(section5Ref, { once: true, amount: 0.1 });
  const isInView6 = useInView(section6Ref, { once: true, amount: 0.1 });

  return (
    <div className='py-12 space-y-12'>
      <motion.section
        ref={section1Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className='p-6'>
            <div className='flex flex-col md:flex-row gap-6 items-center'>
              <div className='md:w-2/3'>
                <h2 className='text-3xl font-bold text-purple-700 mb-4'>About VIT</h2>
                <p className='mb-4 text-gray-700'>
                  VIT Chennai is a globally engaged, competitive research enriched campus,
                  strategically located in a city that is one of the biggest automotive and IT hubs
                  in Tamil Nadu. Its motto is to respond by rearing students to major industrial,
                  social, economic, and environmental demands and challenges of cosmopolitan cities
                  in India and the world in general. This eight-year-old campus offers
                  undergraduate, postgraduate, and research programmes and draws smart students from
                  every state in India through a highly competitive examination.
                </p>
                <Link
                  href='https://chennai.vit.ac.in/'
                  className='text-blue-600 hover:underline font-semibold'
                >
                  Learn more about VIT Chennai
                </Link>
              </div>
              <div className='md:w-1/3 flex justify-center'>
                <Image
                  src='/vit_about.jpg'
                  alt='VIT Chennai Campus'
                  width={400}
                  height={300}
                  className='rounded-lg shadow-lg'
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        ref={section2Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className='text-3xl font-bold text-purple-700 mb-6'>Association Partners</h2>
        {associationPartners.map((partner, index) => (
          <Card key={index} className='mb-6'>
            <CardHeader>
              <CardTitle className='text-2xl text-purple-700'>{partner.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='md:w-2/3'>
                  <p className='mb-4 text-gray-700'>{partner.description}</p>
                  <Link
                    href={partner.readMoreLink}
                    className='text-blue-600 hover:underline font-semibold'
                  >
                    Learn more about {partner.name}
                  </Link>
                </div>
                <div className='md:w-1/3 flex justify-center items-center'>
                  <Image
                    src={partner.logoUrl}
                    alt={partner.logoAlt}
                    width={200}
                    height={100}
                    className='object-contain'
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.section>

      <motion.section
        ref={section3Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className='text-3xl font-bold text-purple-700'>
              About the Conference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='mb-4 text-gray-700'>
              The aim of the International Conference on adVanced Intelligent Technologies (ICVIT
              2025) is to serve as a platform for researchers, scholars, professionals, and industry
              experts from around the world to come together and exchange ideas, advancements, and
              insights in the fields of computing and technology.
            </p>
            <p className='mb-4 text-gray-700'>
              The conference seeks to explore visionary concepts, breakthroughs, and innovations
              that have the potential to revolutionize the way we approach computing and technology
              in various domains. This includes but is not limited to areas such as artificial
              intelligence, machine learning, data science, internet of things (IoT), robotics,
              cyber-physical systems, quantum computing, augmented and virtual reality, and
              sustainable technology solutions.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        ref={section4Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className='text-3xl font-bold text-purple-700'>
              Conference Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2'>
              {conferenceObjectives.map((objective, index) => (
                <li key={index} className='flex items-start'>
                  <Badge variant='secondary' className='mt-1 mr-2'>
                    {index + 1}
                  </Badge>
                  <span className='text-gray-700'>{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        ref={section5Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className='text-3xl font-bold text-purple-700 mb-6'>Conference Tracks</h2>
        <Accordion type='single' collapsible className='w-full'>
          {conferenceTracks.map((track, index) => (
            <AccordionItem key={index} value={`track-${index}`}>
              <AccordionTrigger className='text-xl font-semibold text-purple-700'>
                {track.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className='list-disc pl-6 space-y-2'>
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className='text-gray-700'>
                      {topic}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>

      <motion.section
        ref={section6Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Card>
          <CardContent className='p-6'>
            <div className='flex flex-col md:flex-row gap-6 items-center'>
              <div className='md:w-2/3'>
                <h2 className='text-3xl font-bold text-purple-700 mb-4'>Publishing & Indexing</h2>
                <p className='mb-4 text-gray-700'>
                  ICVIT&apos;25 proceedings are planned to be published with Springer in their
                  Communications in Computer and Information Science series (final approval
                  pending). All accepted and presented papers will be published by CCIS subject to
                  meeting Springer&apos;s scope and quality requirements. Springer CCIS series is
                  indexed in SCOPUS.
                </p>
              </div>
              <div className='md:w-1/3 flex justify-center'>
                <Image
                  src='/logos/springer.png'
                  alt='Springer Logo'
                  width={200}
                  height={200}
                  className='object-contain'
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
