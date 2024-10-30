/* eslint-disable react/prop-types */
import { useCallback, useRef } from "react";
import { useGetUsers } from "../hooks/useGetUsers";
import styled from "styled-components";

const dropdownUsersSelector = (data) =>
  data?.users?.map(({ id, username }) => ({
    id,
    username,
  })) || [];

export const UserForm = ({ hasInput, onSearchUserTodos, onClear }) => {
  const userQueryRef = useRef("");

  const { data, isLoading } = useGetUsers({ select: dropdownUsersSelector });

  const handleSubmitQuery = useCallback(
    (e) => {
      e.preventDefault();
      const query = userQueryRef.current.value;
      console.log(query);
      onSearchUserTodos(query);
    },
    [onSearchUserTodos]
  );

  const handleClear = useCallback(() => {
    userQueryRef.current.value = "";
    onClear();
  }, [onClear]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <StyledForm onSubmit={handleSubmitQuery} aria-label="user search form">
      <StyledSelect
        ref={userQueryRef}
        defaultValue=""
        aria-required="true"
        aria-label="user select dropdown"
      >
        <option value="" disabled>
          Select a user
        </option>
        {data?.map(({ id, username }) => (
          <option key={id} value={id}>{`${id} - ${username}`}</option>
        ))}
      </StyledSelect>
      <StyledButton
        type="submit"
        aria-label="Search todos for selected user"
        disabled={hasInput}
      >
        Search
      </StyledButton>
      {hasInput && (
        <StyledClearButton
          type="submit"
          onClick={handleClear}
          aria-label="Clear search and reset form"
        >
          Clear
        </StyledClearButton>
      )}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
`;

const StyledSelect = styled.select`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  min-width: 200px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #0073e6;
  }
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  color: #fff;
  background-color: #7373e7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: #6262d2;
  }
`;

const StyledClearButton = styled(StyledButton)`
  background-color: #d78181;
`;
