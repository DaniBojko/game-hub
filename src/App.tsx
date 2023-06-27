import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface QuerySelector {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<QuerySelector>(
    {} as QuerySelector
  );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "255px 1fr" }}
    >
      <GridItem area="nav" marginBottom={5}>
        <NavBar
          onSearch={(text) => setGameQuery({ ...gameQuery, search: text })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            setGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={10}>
        <HStack>
          <PlatformSelector
            setPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            selectedOrder={gameQuery.sortOrder}
            orderClick={(order) =>
              setGameQuery({ ...gameQuery, sortOrder: order })
            }
          ></SortSelector>
        </HStack>
        <GameGrid querySelector={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
