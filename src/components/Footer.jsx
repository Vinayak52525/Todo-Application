/* eslint-disable react/prop-types */
import { perPageCountMap, todoColumnsConfig } from "./constant";
import styled from "styled-components";

export const Footer = ({
  total,
  skip,
  limit,
  onLimitChange,
  onPrevious,
  onNext,
}) => (
  <StyledFooter>
    <tr>
      <td colSpan={todoColumnsConfig.length}>
        <PaginationControls>
          <button
            onClick={onPrevious}
            disabled={skip === 0}
            aria-label="skip to previous page"
          >
            &#8678;
          </button>
          <label>
            Limit:
            <select
              value={limit}
              onChange={onLimitChange}
              aria-label="Per page limit for todos"
            >
              {perPageCountMap.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={onNext}
            disabled={skip + limit >= total}
            aria-label="skip to next page"
          >
            &#8680;
          </button>
        </PaginationControls>
      </td>
    </tr>
  </StyledFooter>
);

const StyledFooter = styled.table`
  width: 100%;
  margin-top: 10px;

  td {
    padding: 12px 15px;
    border-top: 1px solid #ddd;
    text-align: center;
  }
`;

const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    padding: 5px 10px;
    border: 1px solid #ddd;
    background-color: #7373e7;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: #ddd;
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  select {
    padding: 5px;
    border: 1px solid #ddd;
  }
`;
