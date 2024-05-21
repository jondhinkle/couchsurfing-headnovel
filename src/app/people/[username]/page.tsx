import { Profile } from '@/components/profile';
import { fetchUserByUsername } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { username: string } }) {
  const username = params.username;
  const user = await fetchUserByUsername(username);

  if (!user) {
    notFound();
  }

  return (
    <main className='flex bg-[#35374B] items-center min-h-screen flex-col'>
      <Profile user={user}></Profile>
    </main>
  );
}
