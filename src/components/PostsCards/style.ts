import styled from 'styled-components';

export const Container = styled.article`
    flex: 1 0 33%;
    padding: 1rem;
`;

export const Image = styled.img`
    width: 100%;
    height: 250px;

    object-fit: cover;
    border-radius: 1rem;
`;
export const PostContent = styled.div`
    h2 {
        font-size: 1.5rem;
    }
    p {
        font-size: 0.875rem;
    }

    * {
        margin-top: 1rem;
    }
`;
