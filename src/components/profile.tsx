import { User } from '@/definitions';
import Image from 'next/image';

export function Profile({ user }: { user: User }) {
  return (
    <div className='flex rounded-3xl bg-[#50727B] p-2 m-4 shadow-sm flex-nowrap flex-col min-w-fit'>
      <div className='flex p-4 pb-2 items-center flex-wrap'>
        <div className='rounded-lg overflow-hidden h-[100px] w-[100px]'>
          <Image
            style={{ borderRadius: '9999px' }}
            src={`/profile_photos/${user.profilePhotoFilename}`}
            width={100}
            height={100}
            alt={`Profile photo for ${user.displayName}`}
          />
        </div>
        <span className='ml-4'>
          <div className='text-gray-100 text-2xl'>{user.displayName}</div>
          <div className='text-gray-300'>
            <p>
              {user.location.city}, {user.location.state},{' '}
              {user.location.country}
            </p>
          </div>
        </span>
      </div>
      <p className={`px-4 py-2 text-left text-lg font-semibold text-gray-300`}>
        Bio:
      </p>
      <p className={`max-w-prose px-4 py-2 text-left text-lg text-gray-300`}>
        {user.bio}
      </p>
    </div>
  );
}
