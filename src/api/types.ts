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
  schedule: {
    time: string;
    days: string[];
  };
};

export type ShowEpisode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  rating: {
    average: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
};
