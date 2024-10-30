import { useCallback, useMemo, useState } from "react";
import { TodosTablePaginated, UserForm } from "../components";
import { useGetTodos } from "../hooks/useGetTodos";
import { defaultLimit, defaultSkip } from "../components/constant";

const TodosDashboard = () => {
  const [skip, setSkip] = useState(defaultSkip);
  const [limit, setLimit] = useState(defaultLimit);
  const [userQuery, setUserQuery] = useState("");
  const { data, isLoading } = useGetTodos({ skip, limit, userQuery });

  const handleLimitChange = useCallback((event) => {
    setLimit(Number(event.target.value));
    setSkip(defaultSkip);
  }, []);

  const handlePreviousPage = useCallback(
    () => setSkip((prev) => Math.max(0, prev - limit)),
    [limit]
  );
  const handleNextPage = useCallback(
    () => setSkip((prev) => prev + limit),
    [limit]
  );

  const onSearchUserTodos = useCallback((query) => {
    setUserQuery(query);
    setSkip(defaultSkip);
  }, []);

  const todosTableProps = useMemo(
    () => ({
      data,
      isLoading,
      skip,
      limit,
      handleLimitChange,
      handlePreviousPage,
      handleNextPage,
    }),
    [
      data,
      handleLimitChange,
      handleNextPage,
      handlePreviousPage,
      isLoading,
      limit,
      skip,
    ]
  );

  return (
    <>
      <UserForm
        onSearchUserTodos={onSearchUserTodos}
        onClear={() => setUserQuery("")}
        showClear={!!userQuery}
      />
      <TodosTablePaginated {...todosTableProps} />
    </>
  );
};

export default TodosDashboard;
