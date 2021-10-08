import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import Container from './styles';
import Logo from '../../assets/images/logo.svg';

interface iLayout {
    children: ReactNode;
}

function Layout({ children }: iLayout): JSX.Element {
    return (
        <Container>
            <img src={Logo} alt="myxml" />
            {children}
        </Container>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
