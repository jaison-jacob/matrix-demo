import { createGlobalStyle, styled } from "styled-components";
import { device } from "./device";

export const GlobalStyle = createGlobalStyle`
    :root {
        --transition: 200ms ease;
    }
    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.bg_color};
    }

    a {
        color: inherit;
        text-decoration: none;
        font-weight: inherit;
    }

    h1, h2, h3, h4, h5 {
        margin: 0;
        font-weight: 300;
    }
      
    p, label {
      margin: 0;
      font-weight: 400;
      font-size: 13px;
      line-height: 1.6;
    }

    ul {
        margin: 0;
        list-style: none;
    }

    input, textarea, select {
        outline: none;
    }

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;

  @media ${device.desktop} {
    max-width: 1320px;
  }

  @media ${device.laptopL} {
    max-width: 1140px;
  }

  @media ${device.laptop} {
    max-width: 960px;
  }

  @media ${device.tablet} {
    max-width: 720px;
  }

  @media ${device.mobileS} {
    max-width: 540px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FlexJustifyContainer = styled(FlexContainer)`
  justify-content: space-between;
`;

export const SizedBox = styled.div<{ height?: number; width?: number }>`
  height: ${(props) => props.height + 'px' || 0};
  width: ${(props) => props.width + 'px' || 0};
`;
