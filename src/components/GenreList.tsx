import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../service/image-urls";

const GenreList = () => {
  const { genres, error } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="8px">
          <HStack>
            <Image
              boxSize="35px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>{" "}
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
