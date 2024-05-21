'use server';

import { CompositePost, ReactionType, User } from '@/definitions';
import posts from './mock_data/posts.json';
import users from './mock_data/users.json';

export async function fetchCompositePosts(): Promise<CompositePost[]> {
  const compositePosts: CompositePost[] = [];

  posts.posts.forEach((val) => {
    const user = (users.users as any)[val.post.userId];

    const compositePost = {
      post: {
        ...val.post,
        createdAt: new Date(val.post.createdAt),
        updatedAt: val.post.updatedAt
          ? new Date(val.post.updatedAt)
          : undefined,
      },
      user,
      reactionCounts: {
        [ReactionType.Like]: val.reactionCounts.like,
        [ReactionType.Love]: val.reactionCounts.love,
        [ReactionType.Excited]: val.reactionCounts.excited,
        [ReactionType.Congratulations]: val.reactionCounts.congratulations,
        [ReactionType.Angry]: val.reactionCounts.angry,
        [ReactionType.Sad]: val.reactionCounts.sad,
      },
    };

    compositePosts.push(compositePost);
  });

  compositePosts.sort((a, b) => {
    return b.post.createdAt.valueOf() - a.post.createdAt.valueOf();
  });

  return compositePosts;
}

export async function fetchUserByUsername(username: string): Promise<User | null> {
  const userIds = Object.keys(users.users);

  for (let id of userIds) {
    const user = (users.users as any)[id];

    if (user.username === username) {
      return {
        id: id,
        ...user,
      };
    }
  }

  return null;
}
