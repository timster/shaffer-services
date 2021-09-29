import Head from 'next/head';

import Header from '../components/header';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Shaffer Services - Contact</title>
      </Head>
      <div className="m-6">
        <Header>Contact</Header>
      </div>
    </div>
  );
}
