import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
