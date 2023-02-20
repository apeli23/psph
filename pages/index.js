import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import Testimonials from '@/components/Testimonials';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>CallCenter App | Virtual Call Center Software</title>
        <meta name="description" content="CallCenter App - The virtual call center software for your business" />
      </Head>
      {/* <Testimonials /> */}
    </Layout>
  );
}
