import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";
import { Trailer } from "../entities/Trialer";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.get,
  });
};

export default useTrailers;
