import { HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImageURL from "../services/image-url";
import { Button } from "@chakra-ui/react";

interface Props {
  setGenre: (genre: Genre) => void;
}

const GenreList = ({ setGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              marginRight={1}
              borderRadius={8}
              boxSize="32px"
              src={cropImageURL(genre.image_background)}
            ></Image>
            <Button
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
  );
};

export default GenreList;
