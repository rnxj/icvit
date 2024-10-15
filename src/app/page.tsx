'use client';

import { About } from '@/components/content/about';
import { ConferenceCommittee } from '@/components/content/committee';
import { ContactUs } from '@/components/content/contact';
import { Dates } from '@/components/content/dates';
import { Header } from '@/components/content/header';
import { Patrons } from '@/components/content/patrons';
import { RegistrationFee } from '@/components/content/registration-fee';
import { KeynoteSpeakers } from '@/components/content/speakers';
import { Submission } from '@/components/content/submission';

export default function Home() {
  return (
    <div className='bg-white p-8 max-w-7xl mx-auto mt-20'>
      <section id='header'>
        <Header />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='patrons'>
        <Patrons />
      </section>
      <section id='fee'>
        <RegistrationFee />
      </section>
      <section id='dates'>
        <Dates />
      </section>
      <section id='submission'>
        <Submission />
      </section>
      <section id='speakers'>
        <KeynoteSpeakers />
      </section>
      <section id='committee'>
        <ConferenceCommittee />
      </section>
      <section id='contact'>
        <ContactUs />
      </section>
    </div>
  );
}
