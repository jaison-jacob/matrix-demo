import styled from "styled-components";

export const DiagnosisWrapper = styled.section`
  table {
    border: 1px solid #ddd;
    width: 100%;

    thead {
      tr {
        border-bottom: 1px solid #ddd;
      }
      th {
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 10px;
        &:last-child {
          border-right: none;
        }
      }
    }

    tbody {
      border-bottom: 1px solid #ddd;
      td {
        border-right: 1px solid #ddd;
        padding: 10px;
        &:last-child {
          border-right: none;
        }
      }
    }
  }
`;
