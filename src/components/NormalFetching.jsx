import { useEffect, useState } from "react";

export const NormalFetching = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        });
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <div> Loading ...</div>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
      }}
    >
      <h1> Todo List</h1>
      <button> Re fetch</button>
      {data?.map((todoItem, index) => (
        <div>
          {index + 1} -{todoItem.title}
        </div>
      ))}
    </div>
  );
};
