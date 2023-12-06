import usePlatform from "./usePlatform";

const usePlatformId = (platformId?: number) => {
  const { data: platforms } = usePlatform();
  return platforms?.results.find((p) => p.id === platformId);
};

export default usePlatformId;
