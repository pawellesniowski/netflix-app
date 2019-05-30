import HomePage from "../pages/home-page/HomePage";
import DetailsPage from "../pages/details-page/DetailsPage";
import NotFound from "../pages/not-found/NotFound";
import React from "react";

export const routes = [
    {
        path: "/search/:search?",
        component: {HomePage},
    },
    {
        path: "/film/:id",
        component: {DetailsPage},
    },
    {
        exact: true,
        from: "/",
        to: "/search",
    },
    {
        path:"/page-not-found",
        component:{NotFound},
    },


];
