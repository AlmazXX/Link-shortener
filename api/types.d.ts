export interface ILink {
  originalUrl: string;
  shortUrl: string;
}

export interface ApiLink extends ILink {
  _id: string;
}