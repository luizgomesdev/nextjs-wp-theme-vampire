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

    height: 100%;
    min-height: 450px;

    display: flex;
    align-items: flex-end;

    /* filter: brightness(0.5); */
`;
export const WrapperContent = styled.div``;
export const Category = styled.small`
    display: inline-block;
    background: linear-gradient(to right, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.primary});
    padding: 0.5rem 1rem;

    border-radius: 128px;
`;
