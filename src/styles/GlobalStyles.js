import { hover } from "@testing-library/user-event/dist/hover";
import { createGlobalStyle, keyframes } from "styled-components";

const getFlashAnimation = (active, hovered) => keyframes`
    0%, 100% {
        outline: 5px solid transparent;
        /* box-shadow: 0 0 0px 0px transparent; */
    }
    10%{
        outline: 5px solid ${active};
        /* box-shadow: 0 0 5px 0px ${active}; */
    }
    30%{
        outline: 5px solid ${hovered};
        /* box-shadow: 0 0 3px 0px ${hovered}; */
    }
    50%{
        outline: 5px solid ${active};
        /* box-shadow: 0 0 20px 0px ${active}; */
    }
`;

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ::-webkit-scrollbar{
        width: 18px;
    }
    ::-webkit-scrollbar-track{
        margin-block: 10px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${(p) => p.theme.paper.light};
        border-radius: 8px;
        border: 4px solid ${(p) => p.theme.background};
    }
   ::-webkit-scrollbar-thumb:hover{
        background-color:  hsl(217, 10%, 40%);
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
    .flash{
        animation: ${(p) =>
          getFlashAnimation(
            p.theme.palette.warning.active,
            p.theme.palette.warning.hovered
          )} 1.25s forwards 500ms 2;
          /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    }
    //toastify custom style
    .Toastify__toast{
        @media only screen and (max-width: 480px){
            margin-top: 0.5rem;
            margin-inline: 1rem;
        }
    } 
`;
