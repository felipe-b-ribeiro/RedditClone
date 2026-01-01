import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

        transition: background-color 0.5s ease, 
                    color 0.5s ease,
                    border-color 0.5s ease,
                    fill 0.5s ease;

    }

    :root {
        --bg-color: #ffffff;
        --text-color: #000000;
        --search-bar-hover: rgb(245, 245, 245);
        --search-bar-button-hover: rgba(195, 195, 195, 1);
        --contrast-text-color: #000000;
        --interation-buttons-bg: rgb(229, 235, 238);
    }

    [data-theme="dark"] {
        --bg-color: #000000;
        --text-color: #ffffff;
        --search-bar-hover: rgba(57, 57, 57, 1);
        --search-bar-button-hover: rgba(26, 26, 26, 1);
        --interation-buttons-bg: #000000;
    }

    html, body {
        height: 100vh;
        overflow-y: hidden;
        color: var(--text-color);
        background-color: var(--bg-color);
    }

    a {
        color: var(--text-color);
        text-decoration: none;
    }

    svg:not(.imutable) {
        fill: var(--text-color);
    }

    hr {
        background-color: rgb(219, 219, 219);
        border: none;
        min-height: 1px;
    }

    .flx {
        display: flex;
    }

    .a-center {
        align-items: center;
    }


    .g-5 {gap: 5px;}
    .g-10 {gap: 10px;}

`;

export default GlobalStyles;