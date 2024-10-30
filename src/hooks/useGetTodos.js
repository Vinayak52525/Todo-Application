import { useQuery } from "@tanstack/react-query";

const fetchTodos = ({ queryKey }) => {
  const { limit = 10, skip = 0, userQuery } = queryKey[1] || {};
  const url = userQuery
    ? `https://dummyjson.com/todos/user/${userQuery}`
    : `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`;
  return fetch(url).then((res) => res.json());
};

export const useGetTodos = (params) => {
  const {
    data = { todos: [] },
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos", params],
    queryFn: fetchTodos,
  });

  return { data, isLoading, isError };
};
