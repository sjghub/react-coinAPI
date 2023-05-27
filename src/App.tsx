import React from "react";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
const GlobalStyle = createGlobalStyle`
  *{
  box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
  }
  a{
    text-decoration: none;
    color:inherit;
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
