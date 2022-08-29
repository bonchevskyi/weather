import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    background:${(props) => props.theme.bgContent};
    margin:0;
    padding:0;
    line-height:1;
}`;
export default GlobalStyles;
