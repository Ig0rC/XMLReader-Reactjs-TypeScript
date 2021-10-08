import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/themes/default';
import Home from '../pages/Home';
import ListXML from '../pages/ListXML';
import Layout from '../components/Layout';

function WebRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />

                <Switch>
                    <Layout>
                        <Route component={Home} exact path="/" />
                        <Route component={ListXML} path="/listxml" />
                    </Layout>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default WebRoutes;
