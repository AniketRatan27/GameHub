import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../service/api-client";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatform;
