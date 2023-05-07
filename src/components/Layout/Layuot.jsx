import styled from 'styled-components';
import css from './Layuot.module.css';
import { Suspense } from 'react';

const { Outlet, NavLink } = require("react-router-dom")

const Layout = () => {

    const StyledLink = styled(NavLink)`
    color: black;
    
    &.active {
    color: orange;
    }
`;
    return (
        <>
            <nav className={css.nav}>
                <StyledLink className={css.navLink} to="/">Home</StyledLink>
                <StyledLink className={css.navLink} to="/movies">Movies</StyledLink>
            </nav>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Layout;