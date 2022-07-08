import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            display: none;
            -ms-overflow-style: none;
            scrollbar-width: none;
        };
    };

    body {
        font-family: 'Roboto', sans-serif;
        
    };

    :root {

        /* breakpoints*/

        --xs: 0,
        --sm: 576,
        --md: 768,
        --lg: 992px,
        --xl: 1200,
        --xxl: 1400,
        
        --main-color: #01599a;
        --main-color-opacity: rgba(1, 89, 154, 0.8);

        --secundary-color: #fff;
        --secundary-color-opacity: rgba(255, 255, 255, 0.8);
        --secundary-color-opacity-2: rgba(255, 255, 255, 0.4);


        /* typography */

        --body-font: 
        --f-medium: 500;
        --f-semi-bold: 600;
        
        --fs-xs: 0.75rem;
        --fs-sm: 0.875rem;
        --fs-md: 1rem;
        --fs-xmd: 1.125rem;
        --fs-bg: 1.5rem;

        @media (min-width: 968px) {
            --fs-xs: 0.9rem;
            --fs-sm: 1rem;
            --fs-md: 1.125rem;
            --fs-bg: 2rem;
        }; 

        @media (min-width: 1440px) {
            --fs-xs: 1.025rem;
            --fs-sm: 1.125rem;
            --fs-md: 1.250rem;
            --fs-bg: 2.125rem;
        };

       /*  @media (min-width: 1920px) {
            --fs-xs: 1.4rem;
            --fs-sm: 1.5rem;
            --fs-md: 1.625rem;
            --fs-bg: 2.5rem;
        }; */

        /* lenghts */

        --h-xs: 3rem;
        --w-xs: 3rem;
        
        --p-xs: 0.4rem;
        --p-sm: 0.75rem;
        --p-md: 1.25rem;
        --p-bg: 2.25rem;
        --p-xg: 3rem;
        
        --m-sm: 0.75rem;
        --m-md: 1.25rem;
        --m-bg: 2.25rem;
        --m-xg: 3rem;

        /* radius */

        --sm-rounded: 0.75rem;
        --md-rounded: 1.125rem;

        /* shadows */

        --shadow-1: rgba(0, 0, 0, 0.35) 0px 5px 15px;

         
    };

    .icon-reset {
        flex-shrink: 0;
        color: var(--secundary-color-opacity);
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        };
    
    .link-reset {
        text-decoration: none;
        color: var(--secundary-color-opacity);
    };


    .mobile {

        @media (min-width: 1024px) {
            display: none;
        };
    };

    .desktop {

        display: none;
        @media (min-width: 1024px) {
            display: block;
        };
    };

`;