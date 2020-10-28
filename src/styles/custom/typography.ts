import { css } from 'styled-components';

const textAlign = ['left', 'center', 'right'];

const typography = css`
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2.5rem;
    }
    h3 {
        font-size: 2rem;
    }
    h4 {
        font-size: 1.5rem;
    }
    h5 {
        font-size: 1.25rem;
    }
    h6 {
        font-size: 1rem;
    }
    p {
        font-size: 1.125rem;
    }

    ${textAlign.map(
        (align) => css`
            .has-text-align-${align} {
                text-align: ${align};
            }
        `
    )}
`;

export default typography;
