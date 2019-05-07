import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import PageLayout from '../PageLayout/PageLayout';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.scss';
import DetailsPage from "../../pages/details-page/DetailsPage";
import HomePage from "../../pages/home-page/HomePage";
import NotFound from "../../pages/not-found/NotFound";
import Header from "../Header/Header";

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
                <Route path="/page-not-found" component={NotFound} />
                <Redirect from="*" to="/page-not-found" />
            </Switch>
        </Router>
      </PageLayout>
    </ErrorBoundary>
  )
};

export default withRouter(App);
