import Image from 'next/image';
import Head from 'next/head';

import Header from '../components/header';
import deckPaint from '../public/images/work/deck-paint.jpg';
import lightFixture from '../public/images/work/light-fixture.jpg';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Shaffer Services - Photos</title>
      </Head>
      <div className="m-6">
        <Header>Photos</Header>
      </div>
      <div className="md:flex m-6">
        <div className="flex-grow">
          <Image src={deckPaint} alt="Painted deck boards" layout="intrinsic" />
        </div>
        <div className="flex-grow">
          <Image src={lightFixture} alt="Replaced light fixture" layout="intrinsic" />
        </div>
      </div>
    </div>
  );
}
