import { useFetch } from "@raycast/utils";

type Reading = {
  date: Date;
  title: string;
  url: string;
  memo: string;
}

interface ReadingList {
  list: Reading[]
}
export const useReadingList = () => {
  const { isLoading, data, revalidate } = useFetch<ReadingList>('http://localhost:10020/list')

  return { isLoading, data }
}
