import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <div className='nav'>
      <p className='logo'>
        <strong> Trending Jobs</strong>
      </p>
      <div>
        <Link href='/'>View All</Link>
      </div>
    </div>
  );
}
