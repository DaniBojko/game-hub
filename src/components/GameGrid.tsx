import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  genre: Genre | null;
  platform: Platform | null;
}

const GameGrid = ({ genre, platform }: Props) => {
  const { data, error, isLoading } = useGames(genre, platform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={5}
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            ))
          : data.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
