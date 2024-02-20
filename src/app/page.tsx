
import Posts from "@/ components/Posts";
import getQueryClient from "@/ components/getQueryClient";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await res.json();
  console.log(data)
  return data;
}

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({queryKey: ["todos"], queryFn:getData})
  const dehydratedState = dehydrate(queryClient)
  return (
    <HydrationBoundary state={dehydratedState}>
      <Posts/>
    </HydrationBoundary>
  );
}
