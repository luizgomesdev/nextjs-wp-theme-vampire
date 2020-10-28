import { createGlobalStyle, css } from 'styled-components';
import typography from '@/styles/custom/typography';

export default createGlobalStyle` ${css`
    :root {
        --color-gray: #494a50;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font-size: 16px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
        font-weight: 600;
        line-height: 1.4;
    }

    p {
        line-height: 2;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    section {
        padding: 3.5rem 1.5rem;
    }

    ${typography}
`}`;
