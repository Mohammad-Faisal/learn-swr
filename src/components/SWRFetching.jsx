import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const SWRFetching = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  const isLoading = !error && !data;
  if (isLoading) return <div> Loading ...</div>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
      }}
    >
      {data.map((todoItem, index) => (
        <div>
          {index + 1} - {todoItem.title}
        </div>
      ))}
    </div>
  );
};
