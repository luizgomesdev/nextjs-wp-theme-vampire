import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;

    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 1rem;
`;

export const H3 = styled.h3`
    margin-bottom: 1rem;
`;
export const MediaPost = styled.article`
    display: flex;
    align-items: center;

    > :not(:first-child) {
        margin-top: 1rem;
    }
`;
export const Image = styled.img`
    width: 75px;
    height: 75px;

    margin-right: 1rem;
    object-fit: cover;
    border-radius: 50%;
`;
export const PostContent = styled.div``;
export const PostTitle = styled.h2`
    font-size: 1rem;
`;
