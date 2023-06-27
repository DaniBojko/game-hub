import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { QuerySelector } from "../App";

interface Props {
  querySelector: QuerySelector;
}

const GameGrid = ({ querySelector }: Props) => {
  const { data, error, isLoading } = useGames(querySelector);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingY={5}
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
