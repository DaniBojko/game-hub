import {
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImageURL from "../services/image-url";
import { Button } from "@chakra-ui/react";

interface Props {
  setGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, setGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  //if (error) return null;

  //if (isLoading) return <Spinner />;
  return (
    <>
      <Heading marginBottom={5} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                marginRight={1}
                borderRadius={8}
                boxSize="32px"
                src={cropImageURL(genre.image_background)}
              ></Image>
              <Button
                fontWeight={genre === selectedGenre ? "bolder" : "normal"}
                onClick={() => setGenre(genre)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
