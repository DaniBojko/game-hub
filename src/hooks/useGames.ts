import { QuerySelector } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (querySelector: QuerySelector) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: querySelector.genre?.id,
        parent_platforms: querySelector.platform?.id,
        ordering: querySelector.sortOrder,
        search: querySelector.search,
      },
    },
    [querySelector]
  );

export default useGames;
