import styled from 'styled-components';

interface ContainerProps {
    coverImageUrl: string;
}
export const Container = styled.article<ContainerProps>`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.coverImageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    padding: 1.5rem;

    border-radius: 1rem;

    color: #fff;

    min-height: 450px;

    display: flex;
    align-items: flex-end;

    /* filter: brightness(0.5); */
`;
export const WrapperContent = styled.div``;
export const Category = styled.div``;
