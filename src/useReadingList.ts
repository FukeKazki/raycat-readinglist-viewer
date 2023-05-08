import { useFetch } from "@raycast/utils";

type Reading = {
  date: Date;
  title: string;
  url: string;
  memo: string;
};

interface ReadingList {
  list: Reading[];
}
export const useReadingList = () => {
  const { isLoading, data, revalidate } = useFetch<ReadingList>("http://127.0.0.1:80/list");

  return { isLoading, data };
};
