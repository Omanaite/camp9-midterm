export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

export type MovieDbResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
