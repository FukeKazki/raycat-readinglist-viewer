import { ActionPanel, List, Action } from "@raycast/api";
import { useReadingList } from "./useReadingList";

export default function Command() {

  const { isLoading, data } = useReadingList();

  return (
    <List
      isLoading={isLoading}
    >
      {data?.list.map((list, index) => (
        <List.Item
          key={`${list.date}-${index}`}
          title={list.title ?? 'タイトルなし'}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={list.url ?? ""} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
