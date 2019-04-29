import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import PageLayout from '../PageLayout/PageLayout';

import './App.scss';
import DetailsPage from "../../pages/details-page/DetailsPage";
import HomePage from "../../pages/home-page/HomePage";
import Header from "../Header/Header";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

const NotFound = () => <h2>Not Found</h2>;

const App = () => {
  return (
    <ErrorBoundary>
      <PageLayout>
        <Header />
        <Router>
            <Switch>
                <Route path="/search/:search?" component={HomePage} />
                <Route path="/film/:id" component={DetailsPage} />
                <Redirect exact from="/" to="/search" />
                <Route component={NotFound} />
            </Switch>
        </Router>
      </PageLayout>
    </ErrorBoundary>
  )
};

export default withRouter(App);
