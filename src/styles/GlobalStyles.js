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
        --toastify-color-dark: ${(p) => p.theme.background}
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family: "Outfit", sans-serif;
        font-size: 1.15rem;
        background-color: ${(p) => p.theme.background};
    }
    //toastify custom style
    .Toastify__toast{
        @media only screen and (max-width: 480px){
            margin-top: 0.5rem;
            margin-inline: 1rem;
        }
    } 
`;
