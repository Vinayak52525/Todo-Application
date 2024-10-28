import { useQuery } from "@tanstack/react-query";

const fetchTodos = ({ queryKey }) => {
  const { limit = 10, skip = 0 } = queryKey[1] || {};
  return fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`).then(
    (res) => res.json()
  );
};

export const useGetTodos = ({ skip, limit }) => {
  const {
    data = { todos: [] },
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos", { skip, limit }],
    queryFn: fetchTodos,
  });

  return { data, isLoading, isError };
};
