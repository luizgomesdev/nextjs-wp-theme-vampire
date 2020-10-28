import styled from 'styled-components';
import { shade } from 'polished';
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 72px;

    background-color: ${(props) => shade(0.1, props.theme.colors.background)};
`;

export const NavBrand = styled.div``;

export const NavMenu = styled.div``;

export const NavLogo = styled.a``;

export const NavItem = styled.a`
    color: ${(props) => props.theme.colors.text};

    text-transform: uppercase;

    font-size: 0.875rem;

    margin: 0 1rem;

    position: relative;

    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);

    &:hover {
        &:before {
            right: 0;
        }
    }

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        right: 100%;
        bottom: -0.5rem;
        background: ${(props) => props.theme.colors.primary};
        height: 4px;
        -webkit-transition-property: right;
        transition-property: right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
`;
