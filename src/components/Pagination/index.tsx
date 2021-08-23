import React, { useEffect, useState } from "react";
import * as S from "./styles";

type PaginationProps = {
  issuesPerPage: number;
  totalIssues: number;
  paginate: any;
};

export default function Pagination({
  issuesPerPage,
  totalIssues,
  paginate,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <S.PaginationContainer>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button type="button" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </S.PaginationContainer>
  );
}
