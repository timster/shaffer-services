import Head from 'next/head';
import Image from 'next/image';

import logoImage from '../public/images/logo.png';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Shaffer Services - Home</title>
      </Head>

      <main className="p-6 text-center">
        <Image src={logoImage} alt="Shaffer Services" />
      </main>

      <div className="flex flex-col space-y-6 px-6 text-center">
        <div>
          Quality handyman services in the Chattanooga area since 2021.
        </div>
        <div>
          Need a hand with your next project? Give us a call!
        </div>
        <div>
          <a
            className="
                inline-block shadow-md rounded-md px-8 py-6
                bg-gray-800 hover:bg-gray-700 text-white font-bold
            "
            href="tel:4235674780"
          >
            423-567-4780
          </a>
        </div>
      </div>
    </div>
  );
}
