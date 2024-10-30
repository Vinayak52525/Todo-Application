import { useQuery } from "@tanstack/react-query";

const getUsers = ({ queryKey }) => {
  const { userId } = queryKey[1] || {};
  return fetch(`https://dummyjson.com/users${userId ? `/${userId}` : ""}`).then(
    (res) => res.json()
  );
};

export const useGetUsers = ({ select, userId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["users", { userId }],
    queryFn: getUsers,
    select,
  });

  return { data, isLoading };
};
