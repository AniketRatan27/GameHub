import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../service/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
