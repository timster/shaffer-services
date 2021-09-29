/* eslint-disable react/jsx-props-no-spreading */
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="text-gray-800 mb-20">
      <div className="bg-gray-800 text-white shadow">
        <div className="w-full max-w-lg flex mx-auto">
          <Link href="/">
            <a className="hover:text-gray-300 py-4 flex-grow text-center">Home</a>
          </Link>
          <Link href="/services">
            <a className="hover:text-gray-300 py-4 flex-grow text-center">Services</a>
          </Link>
          <Link href="/photos">
            <a className="hover:text-gray-300 py-4 flex-grow text-center">Photos</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-300 py-4 flex-grow text-center">Contact</a>
          </Link>
        </div>
      </div>

      <header className="shadow-md bg-gray-800 text-white flex" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
