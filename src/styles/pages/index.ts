import styled from 'styled-components';

export const Header = styled.header``;

export const Headline = styled.section``;

export const SpotlightSection = styled.section`
    display: flex;
    /* flex-wrap: wrap; */

    > :not(:first-child) {
        margin-left: 1rem;
    }
`;

export const Main = styled.main``;
export const PostsTitleSection = styled.section`
    text-align: center;
    padding-bottom: 0;
`;
export const PostsSection = styled.section`
    display: flex;

    flex-wrap: wrap;
`;
