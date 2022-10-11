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
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family: "Outfit", sans-serif;
        font-size: 1.15rem;
        background-color: ${(p) => p.theme.background};
    }
    /* .active{
        color: black
    } */
`;
