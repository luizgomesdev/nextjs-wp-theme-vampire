import IMenuItem from '@/dtos/menuItem';

import { Nav, Container, NavBrand, NavMenu, NavLogo, NavItem } from './style';

export interface INavbarProps {
    items: Array<IMenuItem>;
    logoUrl: string;
}
export default function Navbar({ items, logoUrl }: INavbarProps) {
    return (
        <>
            <Nav className="navbar" role="navigation" aria-label="main navigation">
                <Container>
                    <NavBrand className="navbar-brand">
                        <NavLogo href="#">
                            <img src={logoUrl} width="112" height="28" />
                        </NavLogo>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="primary-navbar">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </NavBrand>

                    <NavMenu id="primary-navbar" className="navbar-menu">
                        <div className="navbar-start">
                            {items.map((item) => (
                                <NavItem key={item.id} href={`/${item.url}`}>
                                    {item.title}
                                </NavItem>
                            ))}
                        </div>
                    </NavMenu>
                </Container>
            </Nav>
        </>
    );
}
