"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Heading = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  return (
    <div>
      <nav className='text-white font-3xl px-5 space-x-6 bg-black'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/news">News</Link>
        <button onClick={handleHome}>Go to Home</button>
      </nav>
    </div>
  );
};

export default Heading;
