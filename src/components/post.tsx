import { Reaction as ReactionItem } from '@/components/reactions';
import {
  Post as PostData,
  ReactionCounts,
  ReactionType,
  User,
} from '@/definitions';
import { DateTime } from 'luxon';
import Image from 'next/image';
import Link from 'next/link';

export function Post({
  user,
  post,
  reactions,
}: {
  user: User;
  post: PostData;
  reactions: ReactionCounts;
}) {
  const reactionAccumulator = (total: number, reactionType: ReactionType) =>
    total + reactions[reactionType];
  const totalReactions = Object.values(ReactionType).reduce(
    reactionAccumulator,
    0,
  );

  return (
    <div className='flex rounded-3xl bg-[#50727B] p-2 m-4 shadow-sm flex-nowrap flex-col w-fit'>
      <div className='flex p-4 pb-2 items-center flex-wrap'>
        <div className='rounded-lg overflow-hidden h-[100px] w-[100px]'>
          <Link href={`/people/${user.username}`}>
            <Image
              style={{ borderRadius: '9999px' }}
              src={`/profile_photos/${user.profilePhotoFilename}`}
              width={100}
              height={100}
              alt={`Profile photo for ${user.displayName}`}
            />
          </Link>
        </div>
        <span className='ml-4'>
          <div className='text-gray-100 text-2xl'>
            <Link href={`/people/${user.username}`}>{user.displayName}</Link>
          </div>
          <div className='text-gray-300'>
            <span>{DateTime.fromJSDate(post.createdAt).toRelative()}</span>
          </div>
        </span>
      </div>
      <p
        className={'max-w-prose rounded-xl whitespace-pre-wrap p-4 pt-2 pb-2 text-left text-lg text-gray-300'}
      >
        {post.text}
      </p>
      {!!totalReactions && (
        <div className='flex p-2 pt-2 items-center flex-wrap'>
          {!!reactions[ReactionType.Like] && (
            <ReactionItem
              reactionType={ReactionType.Like}
              num={reactions[ReactionType.Like]}
            />
          )}
          {!!reactions[ReactionType.Love] && (
            <ReactionItem
              reactionType={ReactionType.Love}
              num={reactions[ReactionType.Love]}
            />
          )}
          {!!reactions[ReactionType.Excited] && (
            <ReactionItem
              reactionType={ReactionType.Excited}
              num={reactions[ReactionType.Excited]}
            />
          )}
          {!!reactions[ReactionType.Congratulations] && (
            <ReactionItem
              reactionType={ReactionType.Congratulations}
              num={reactions[ReactionType.Congratulations]}
            />
          )}
          {!!reactions[ReactionType.Angry] && (
            <ReactionItem
              reactionType={ReactionType.Angry}
              num={reactions[ReactionType.Angry]}
            />
          )}
          {!!reactions[ReactionType.Sad] && (
            <ReactionItem
              reactionType={ReactionType.Sad}
              num={reactions[ReactionType.Sad]}
            />
          )}
        </div>
      )}
    </div>
  );
}
