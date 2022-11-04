export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: [string];
  status: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  premiered: string;
  rating: {
    average: number;
  };
};
