import styled from "styled-components";

export const StyledHeader = styled.section`
  background-color: ${(props) => props.theme.theme_color};
  padding: 20px;
  height: 100vh;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.table_bg_color};
    font-weight: bold;
    align-self: flex-start;
  }

  ul {
    list-style: none;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    li {
      a {
        /* color: ${(props) => props.theme.header_font_color}; */
        color: #307280;
      }
      &.active {
        a {
          /* color: ${(props) => props.theme.table_bg_color}; */
          color: #fff;
        }
      }
    }
  }
`;
