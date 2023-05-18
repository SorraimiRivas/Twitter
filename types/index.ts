export type TypeUser = {
  id: string;
  name: string;
  image?: string;
  username: string;
};

export type TypeTweet = {
  user: TypeUser;
  content: string;
  id: string;
  image?: string;
  createdAt: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
};
