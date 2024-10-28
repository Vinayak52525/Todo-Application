/* eslint-disable react/prop-types */
import styled from "styled-components";
import { todoColumnsConfig } from "./constant";

export const Table = ({ data, isLoading }) => (
  <StyledTable>
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
          <Loader colSpan={todoColumnsConfig.length}>Loading...</Loader>
        </tr>
      ) : (
        data.todos.map(({ id, userId, completed, todo }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{todo}</td>
            <td>{completed ? "Completed" : "Pending"}</td>
            <td>
              <a>{userId}</a>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </StyledTable>
);

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

const Loader = styled.td`
  text-align: center;
`;
