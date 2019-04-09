import React from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import PageLayout from '../PageLayout/PageLayout';

import './App.scss';
import DetailsPage from "../../pages/details-page/DetailsPage";
import HomePage from "../../pages/home-page/HomePage";
import Header from "../Header/Header";

const App = () => {
  return (
    <ErrorBoundary>
      <PageLayout>
        <Header />
        {/*<HomePage/>*/}
        <DetailsPage/>
      </PageLayout>
    </ErrorBoundary>
  )
};

export default App;
