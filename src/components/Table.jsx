/* eslint-disable react/prop-types */
import styled from "styled-components";
import { todoColumnsConfig } from "./constant";
import { Link } from "react-router-dom";

export const Table = ({ data, isLoading }) => (
  <StyledTable aria-labelledby="todos-table" role="table">
    <thead>
      <tr>
        {todoColumnsConfig.map(({ name, label, minWidth }) => (
          <StyledHeader key={name} minWidth={minWidth}>
            {label}
          </StyledHeader>
        ))}
      </tr>
    </thead>
    <tbody>
      {isLoading ? (
        <tr>
          <CenteredDataCell colSpan={todoColumnsConfig.length}>
            Loading...
          </CenteredDataCell>
        </tr>
      ) : (
        <TableBody data={data} />
      )}
    </tbody>
  </StyledTable>
);

const TableBody = ({ data }) => {
  const hasTodos = data?.todos?.length > 0;
  return hasTodos ? (
    data.todos.map(({ id, userId, completed, todo }) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{todo}</td>
        <td>{completed ? "Completed" : "Pending"}</td>
        <StyledUserIdCell aria-label={`View details for user ${userId}`}>
          <Link to={`/users/${userId}`}>{userId}</Link>
        </StyledUserIdCell>
      </tr>
    ))
  ) : (
    <tr>
      <CenteredDataCell colSpan={4}>No Todos Found</CenteredDataCell>
    </tr>
  );
};

const StyledTable = styled.table`
  border-collapse: collapse;
  text-align: left;
  width: 100%;

  th,
  td {
    padding: 12px 15px;
    border: 1px solid #ddd;
  }
`;

const StyledHeader = styled.th`
  min-width: ${(props) => `${props.minWidth}px`};
  position: sticky;
  top: 0;
  background-color: #ebe8e8;
  z-index: 1;
`;

const CenteredDataCell = styled.td`
  text-align: center;
`;

const StyledUserIdCell = styled.td`
  text-decoration: underline;
  color: blue;
`;
