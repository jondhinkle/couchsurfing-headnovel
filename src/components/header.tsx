'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header({ username }: { username: string }) {
  return (
    <header className='flex items-stretch text-gray-50 bg-[#344955] sticky top-0'>
      <div className='flex items-stretch'>
        <Link className='rounded-md p-4 mr-4' href='/'>
          <Image
            src={'/headnovel.svg'}
            width={300}
            height={300}
            alt={'Icon for Headnovel'}
          />
        </Link>
      </div>
      <div className='flex items-stretch'>
        <Link
          key='Home'
          href='/'
          className='justify-center content-end p-4 md:px-10 text-lg md:text-2xl font-medium hover:bg-[#50727B]'
        >
          <p>Home</p>
        </Link>
        <Link
          key='My Profile'
          href={`/people/${username}`}
          className='justify-center content-end p-4 md:px-10 text-lg md:text-2xl font-medium hover:bg-[#50727B]'
        >
          <p>My Profile</p>
        </Link>
      </div>
    </header>
  );
}
