import { PostList } from '@/components/post-list';
import { fetchCompositePosts } from '@/lib/data';

export default async function Page() {
  const compositePosts = await fetchCompositePosts();

  return (
    <main className='flex bg-[#35374B] items-center min-h-screen flex-col'>
      <PostList compositePosts={compositePosts}></PostList>
    </main>
  );
}
