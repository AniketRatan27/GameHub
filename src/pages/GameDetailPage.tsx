import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandabelText from "../components/ExpandabelText";
import GameAttribute from "../components/GameAttribute";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandabelText>{game.description_raw}</ExpandabelText>
      <GameAttribute game={game} />
    </>
  );
};

export default GameDetailPage;
