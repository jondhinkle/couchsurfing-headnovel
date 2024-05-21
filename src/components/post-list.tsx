import { CompositePost } from '@/definitions';
import { Post as PostItem } from './post';

export function PostList({
  compositePosts,
}: {
  compositePosts: CompositePost[];
}) {
  return (
    <div>
      {compositePosts.map((compositePost) => {
        return (
          <PostItem
            key={compositePost.post.id}
            user={compositePost.user}
            post={compositePost.post}
            reactions={compositePost.reactionCounts}
          />
        );
      })}
    </div>
  );
}
