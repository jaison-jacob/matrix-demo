import styled from "styled-components";

export const PatientInfoWrapper = styled.div`
  width: 100%;
  height: calc(109vh - 120px);
  padding: 10px;
  table {
    background-color: ${(props) => props.theme.table_bg_color};
    border-radius: 5px;

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
    table-layout: fixed;
  }

  h3 {
    color: ${(props) => props.theme.body_text_color};
    margin-bottom: 20px;
  }

  label {
    color: ${(props) => props.theme.body_text_color};
  }
`;
