import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        color-scheme: dark;
    }
    /* .active{
        color: black
    } */
`;
