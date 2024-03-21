import React from 'react';
import {Route, Switch} from "wouter";
import EntrepriseListeView from "../views/entrepriseListeView.jsx";
import NotFound from "../views/NotFound.jsx";
import OffresListeView from "../views/OffresListeView.jsx";

function Router () {
    return (
        <Switch>
            <Route path="/entreprises">
                <EntrepriseListeView/>
            </Route>
            <Route path="/offres">
                <OffresListeView/>
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
}

export default Router;





