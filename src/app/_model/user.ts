export interface User {
  nickname: string;
  category: string;
  votes: number;
}

export enum Category {
  eve = 'eve',
  adam = 'adam'
}
