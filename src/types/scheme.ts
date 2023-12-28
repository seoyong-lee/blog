export interface User {
  id: string;
  name: string;
  createdAt: number;
  isAdmin?: boolean;
}

export interface Post {
  id: string;
  title: string;
  desc?: string;
  ogImgUrl?: string;
  imgUrl: string;
  imgDesc?: string;
  text: string;
  author: {
    name: string;
    profileImgUrl?: string;
  };
  deleted: boolean;
  isPublic?: boolean;
  createdAt: number;
  updatedAt?: number;
}
