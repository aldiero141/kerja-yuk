type NewsUser = {
  name: string;
  avatar: string;
};

export type News = {
  user: NewsUser;
  content: string;
  date: string;
  day: string;
};
