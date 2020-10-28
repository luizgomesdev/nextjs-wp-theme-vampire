import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    @media screen and (max-width: 1023px) {
        min-width: 100%;
    }
    @media screen and (min-width: 1024px) and (max-width: 1215px) {
        max-width: 960px;
    }
    @media screen and (min-width: 1216px) and (max-width: 1407px) {
        max-width: 1152px;
    }
    @media screen and (min-width: 1408px) {
        max-width: 1344px;
    }
`;
