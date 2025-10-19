"use client";

import Link from 'next/link';
import React from 'react'

const AboutNav = () => {
  return (
    <div>
      <nav>
        <Link href="/about/go">about go</Link>
        <Link href="/about/run"> About run</Link>
      </nav>
    </div>
  )
}

export default AboutNav