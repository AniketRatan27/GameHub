import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../Store";
import useGenreId from "../hooks/useGenreId";
import usePlatformId from "../hooks/usePlatformId";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenreId(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatformId(platformId);

  const heading = `${platform?.name || ""}  ${genre?.name || ""}  Games`;
  return (
    <Heading as="h1" fontSize="6xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
