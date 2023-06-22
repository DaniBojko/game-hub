import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListSkeleton key={skeleton}></GenreListSkeleton>
        ))}
      <ul>
        {genres.map((genre: Genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
