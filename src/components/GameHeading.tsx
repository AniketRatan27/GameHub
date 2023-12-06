import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import usePlatformId from "../hooks/usePlatformId";
import useGenreId from "../hooks/useGenreId";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreId(gameQuery.genreId);

  const platform = usePlatformId(gameQuery.platformId);

  const heading = `${platform?.name || ""}  ${genre?.name || ""}  Games`;
  return (
    <Heading as="h1" fontSize="6xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
