import React from 'react';
import {Route, Switch} from "wouter";
import EntrepriseListeView from "../views/entrepriseListeView.jsx";
import NotFound from "../views/NotFound.jsx";
import PropTypes from "prop-types";


function Router () {
    return (
        <Switch>
            <Route path="/entreprises">
                <EntrepriseListeView/>
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
}
Router.Proptype = {
    page: PropTypes.number,
    setpage: PropTypes.func,
};
export default Router;





