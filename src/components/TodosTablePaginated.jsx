/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Table } from "./Table";
import { Footer } from "./Footer";

export const TodosTablePaginated = ({
  data,
  isLoading,
  skip,
  limit,
  handleLimitChange,
  handlePreviousPage,
  handleNextPage,
}) => {
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
