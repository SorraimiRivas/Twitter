export type TypeUser = {
  id: string;
  name: string;
  image?: string;
  username: string;
};

export type TypeTweet = {
  content: string;
  user: TypeUser;
  id: string;
  image?: string;
  createdAt: string;
  numberOfComments: number;
  numberOfRetweets: number;
  numberOfLikes: number;
  impressions: number;
};
