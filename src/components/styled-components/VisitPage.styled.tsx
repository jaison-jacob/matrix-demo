import styled from "styled-components";

export const VisitWrapper = styled.section`
padding: 10px;
  h1 {
    color: #fff;
    padding: 10px;
  }

  table {
    background-color: ${(props) => props.theme.table_bg_color};
    border-radius: 5px;
    width: 100%;

    thead {
      tr {
        border-bottom: 1px solid ${(props) => props.theme.bg_color};
      }
      th {
        border-right: 1px solid ${(props) => props.theme.bg_color};
        border-bottom: 1px solid ${(props) => props.theme.bg_color};
        padding: 10px;
        font-size: 14px;
        color: ${(props) => props.theme.theme_color};
        &:last-child {
          border-right: none;
        }
      }
    }

    tbody {
      display: block;
      height: calc(100vh - 120px);
      overflow-y: auto;
      border-bottom: 1px solid ${(props) => props.theme.bg_color};

      tr {
        min-height: 30px;
        border-bottom: 1px solid ${(props) => props.theme.bg_color};
        &:last-child {
          border-bottom: none;
        }
        td {
          border-right: 1px solid ${(props) => props.theme.bg_color};
          padding: 10px;
          font-size: 12px;
          color: ${(props) => props.theme.body_text_color};
          &:last-child {
            border-right: none;
          }

          &.active_link {
            text-decoration: underline;
            color: ${(props) => props.theme.theme_color};
            cursor: pointer;
          }
        }
      }
    }
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
`;
