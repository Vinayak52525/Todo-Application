import { useCallback, useState } from "react";
import styled from "styled-components";
import { useGetTodos } from "../hooks/useGetTodos";
import { Table } from "./Table";
import { Footer } from "./Footer";

export const TodosTablePaginated = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const { data, isLoading } = useGetTodos({ skip, limit });

  const handleLimitChange = useCallback((event) => {
    setLimit(Number(event.target.value));
    setSkip(0);
  }, []);

  const handlePreviousPage = () => setSkip((prev) => Math.max(0, prev - limit));
  const handleNextPage = () => setSkip((prev) => prev + limit);

  return (
    <>
      <StyledTableContainer>
        <Table data={data} isLoading={isLoading} />
      </StyledTableContainer>
      <Footer
        total={data?.total}
        skip={skip}
        limit={limit}
        onLimitChange={handleLimitChange}
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
      />
    </>
  );
};

const StyledTableContainer = styled.div`
  height: 80vh;
  overflow-y: auto;
`;
