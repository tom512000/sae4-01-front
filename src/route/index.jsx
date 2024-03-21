import React from "react";
import { Route, Switch } from "wouter";
import EntrepriseListeView from "../views/entrepriseListeView";
import NotFound from "../views/NotFound";
import OffresListeView from "../views/OffresListeView";

function Router() {
  return (
    <Switch>
      <Route path="/entreprises">
        <EntrepriseListeView />
      </Route>
      <Route path="/offres">
        <OffresListeView />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
