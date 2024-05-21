import { ReactionType } from '@/definitions';
import Image from 'next/image';

export function Reaction({
  reactionType,
  num,
}: {
  reactionType: ReactionType;
  num: number;
}) {
  return (
    <div
      title={reactionType}
      className='flex bg-[#78A083] rounded-xl items-center justify-center shadow-sm m-2 text-gray-100 flex-col w-[60px] h-[60px]'
    >
      <Image
        src={`/reactions/${reactionType}.png`}
        width={30}
        height={30}
        alt={`Reaction icon for ${reactionType}`}
      />
      <p>{num}</p>
    </div>
  );
}
