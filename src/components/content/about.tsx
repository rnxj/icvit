'use client';

import { motion, useInView } from 'framer-motion';
import { MicVocalIcon } from 'lucide-react';
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
    name: "Taylor's University",
    description:
      "No. 1 Private University in Malaysia and Southeast Asia. We are ranked the top private university in Malaysia and Southeast Asia, placing us among the world's top universities. This follows our achievement of being one of the few Asian universities rated 5 Stars for Online Learning, acknowledging the world-class education we provide for our students.",
    logoUrl: '/logos/taylors.png',
    logoAlt: 'Taylor Logo',
    readMoreLink: 'https://www.taylor.edu.my/',
  },
  // {
  //   name: 'Bureau of Indian Standards (BIS)',
  //   description:
  //     'BIS is the National Standard Body of India established under the BIS Act 2016 for the harmonious development of the activities of standardization, marking, and quality certification of goods and for matters connected therewith or incidental thereto. BIS has been providing traceability and tangibility benefits to the national economy in a number of ways by providing safe reliable quality goods; minimizing health hazards to consumers; promoting exports and import substitutes; control over proliferation of varieties etc. through standardization, certification, and testing',
  //   logoUrl: '/logos/bis.png',
  //   logoAlt: 'BIS Logo',
  //   readMoreLink: 'https://www.bis.gov.in/',
  // },
  // {
  //   name: 'UiPath Academic Alliance',
  //   description:
  //     'Automation and AI offer unprecedented opportunities to innovate. UiPath enables our customers to tap into this power with our industry-leading AI-powered enterprise automation technology. We are committed to promoting and maintaining an ethical workplace, protecting our customers data, managing risks, and building ongoing stakeholder value through the practice of good governance and oversight',
  //   logoUrl: '/logos/uipath.png',
  //   logoAlt: 'UiPath Academic Alliance Logo',
  //   readMoreLink: 'https://www.uipath.com/',
  // },
];

const conferenceObjectives = [
  'To foster Global Collaboration and Knowledge Exchange by bringing together researchers, academicians, industry professionals, and policymakers from across the world to share insights, research findings, and technological advancements in the domain of intelligent technologies.',
  'To showcase Advanced Research and Innovations by providing a premier platform for presenting original, high-impact research and pioneering innovations that address real-world challenges in computing and related fields.',
  'To promote Sustainable and Ethical Technological Development that supports the United Nations Sustainable Development Goals (SDGs), with a focus on ethical, inclusive, and environmentally responsible applications of advanced technologies.',
  'To bridge the Gap Between Academia and Industry, facilitating meaningful interactions between academic researchers and industry leaders, promoting the practical implementation and commercialization of research through collaborative initiatives.',
];

const conferenceTracks = [
  {
    title: 'Session 1: Machine Learning, Deep Learning and Generative AI',
    topics: [
      'Deep Learning Architectures and Neural Networks',
      'Generative Adversarial Networks (GANs) and Diffusion Models',
      'Transfer Learning and Few-shot Learning',
      'Reinforcement Learning and Decision Making',
      'AI for Scientific Discovery and Research',
      'Explainable AI and Model Interpretability',
    ],
  },
  {
    title: 'Session 2: Computer Vision and Image Processing',
    topics: [
      'Object Detection and Recognition',
      'Image Segmentation and Classification',
      'Video Analysis and Processing',
      'Medical Image Analysis',
      '3D Computer Vision and Scene Understanding',
      'Visual SLAM and 3D Reconstruction',
    ],
  },
  {
    title: 'Session 3: Natural Language Processing and Computational Linguistics',
    topics: [
      'Large Language Models and Transformers',
      'Text Generation and Summarization',
      'Machine Translation and Multilingual NLP',
      'Sentiment Analysis and Opinion Mining',
      'Question Answering Systems',
      'Information Extraction and Retrieval',
    ],
  },
  {
    title: 'Session 4: Intelligent Systems, Robotics, and Autonomous Agents',
    topics: [
      'Robotics: Perception, Planning, and Control',
      'Human-Robot Interaction',
      'Autonomous Vehicles and Navigation',
      'Multi-agent Systems and Swarm Intelligence',
      'Industrial Automation and Smart Manufacturing',
      'Cognitive Robotics and AI',
    ],
  },
  {
    title: 'Session 5: Smart Internet of Things (IoT), Edge Computing and Security',
    topics: [
      'IoT Architecture and Protocols',
      'Edge Computing and Fog Computing',
      'IoT Security and Privacy',
      'Smart Cities and Infrastructure',
      'Industrial IoT Applications',
      'Sensor Networks and Data Analytics',
    ],
  },
  {
    title: 'Session 6: Quantum Computing, Quantum AI and Applications',
    topics: [
      'Quantum Algorithms and Complexity',
      'Quantum Machine Learning',
      'Quantum Error Correction',
      'Quantum Software Development',
      'Quantum Cryptography',
      'Hybrid Quantum-Classical Computing',
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
                <h2 className='text-3xl font-bold text-primary-700 mb-4'>About VIT</h2>
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
        {/* <h2 className='text-3xl font-bold text-primary-700 mb-6'>Association Partners</h2> */}
        {associationPartners.map((partner, index) => (
          <Card key={index} className='mb-6'>
            <CardHeader>
              <CardTitle className='text-2xl text-primary-700'>{partner.name}</CardTitle>
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
            <CardTitle className='text-3xl font-bold text-primary-700'>
              About the Conference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='mb-4 text-gray-700'>
              The International Conference on adVanced Intelligent Technologies (ICVIT 2025), to be
              held on September 18-19, 2025, at Vellore Institute of Technology (VIT), Chennai,
              India, is a prestigious academic event designed to bring together leading researchers,
              academicians, scientists, industry professionals, and policy makers from across the
              globe. The conference aims to foster interdisciplinary dialogue and collaboration in
              the realm of advanced computing and intelligent technologies.
            </p>
            <p className='mb-4 text-gray-700'>
              ICVIT 2025 aspires to serve as a dynamic platform for the dissemination of
              cutting-edge research, emerging trends, and visionary innovations that are shaping the
              future of technology. The event will facilitate the exchange of insights and
              experiences among participants through keynote addresses, technical paper
              presentations, panel discussions, and industry-academia interactions.
            </p>
            <div className='mt-6'>
              <h3 className='text-xl font-bold text-primary-700 mb-2'>Conference Theme</h3>
              <p className='text-gray-700 italic border-l-4 border-primary-200 pl-4 py-2 bg-primary-50 rounded'>
                "Fostering Technological Advancement through Innovations in Artificial Intelligence,
                Internet of Things, Robotics, and Sustainable Solutions"
              </p>
            </div>
            <div className='mt-6'>
              <h3 className='text-xl font-bold text-primary-700 mb-2'>Topics of Interest</h3>
              <ul className='list-disc pl-6 space-y-1 text-gray-700'>
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Data Science and Big Data Analytics</li>
                <li>Internet of Things (IoT) and Smart Systems</li>
                <li>Robotics and Autonomous Systems</li>
                <li>Cyber-Physical Systems and Embedded Computing</li>
                <li>Quantum Computing and High-Performance Systems</li>
                <li>Augmented Reality (AR) and Virtual Reality (VR)</li>
                <li>Sustainable and Green Technologies</li>
                <li>Human-Centric and Ethical AI Solutions</li>
              </ul>
            </div>
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
            <CardTitle className='text-3xl font-bold text-primary-700'>
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
        <h2 className='text-3xl font-bold text-primary-700 mb-6'>Conference Sessions</h2>
        <Accordion type='single' collapsible className='w-full'>
          {conferenceTracks.map((track, index) => (
            <AccordionItem key={index} value={`track-${index}`}>
              <AccordionTrigger className='text-lg font-semibold text-primary-700'>
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
            <div className='flex flex-col items-center space-y-4'>
              <div className='w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center'>
                <MicVocalIcon />
              </div>
              <h2 className='text-3xl font-bold text-primary-700'>Publishing & Indexing</h2>
              <p className='text-gray-500 text-center'>
                Details about publishing and indexing will be updated soon. Please check back later.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
