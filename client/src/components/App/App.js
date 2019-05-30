import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import PageLayout from '../PageLayout/PageLayout';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.scss';
import Header from "../Header/Header";
import { routes } from "../../app/routes";

function RedirectWithStatus({ from, to, status }) {
    return (
        <Route
            render={({ staticContext }) => {
                if (staticContext) staticContext.status = status;
                return <Redirect from={from} to={to} />;
            }}
        />
    );
}

const App = () => {
  return (
    <ErrorBoundary>
      <PageLayout>
        <Header />
            <Switch>
                {
                    routes.map(route => (
                        <Route {...route} />
                    ))
                }
                <Redirect from="*" to="/page-not-found" />
                <RedirectWithStatus status={301} from="/search/:search" to="/search" />
                <RedirectWithStatus status={302} from="/search/:search" to="/search" />
            </Switch>
      </PageLayout>
    </ErrorBoundary>
  )
};

export default withRouter(App);
