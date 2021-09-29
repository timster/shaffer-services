import Head from 'next/head';

import Header from '../components/header';

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <title>Shaffer Services - Services</title>
      </Head>
      <div className="m-6">
        <Header>Services</Header>
      </div>
      <div className="md:flex m-6">
        <ul className="flex-grow list-disc ml-6">
          <li>col 1</li>
          <li>col 1</li>
          <li>col 1</li>
        </ul>
        <ul className="flex-grow list-disc ml-6">
          <li>col 2</li>
          <li>col 2</li>
          <li>col 2</li>
        </ul>
      </div>
    </div>
  );
}
