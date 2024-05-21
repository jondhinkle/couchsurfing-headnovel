export type User = {
  id: string;
  email: string;
  username: string;
  displayName: string;
  profilePhotoFilename: string;
  location: Location;
  bio: string;
};

export type Location = {
  city: string;
  state?: string;
  country: string;
};

export type FriendConnection = {
  userId1: string;
  userId2: string;
};

export type Post = {
  id: string;
  userId: string;
  text: string;
  createdAt: Date;
  updatedAt?: Date;
};

export type CompositePost = {
  user: User;
  post: Post;
  reactionCounts: Record<ReactionType, number>;
};

export enum ReactionType {
  Like = "like",
  Love = "love",
  Excited = "excited",
  Congratulations = "congratulations",
  Sad = "sad",
  Angry = "angry",
}

export type Reaction = {
  id: string;
  postId: string;
  reactionType: ReactionType;
  userId: string;
};

export type ReactionCounts = Record<ReactionType, number>;
