import React from "react";
import { Route, Switch } from "wouter";
import EntrepriseListeView from "../views/entrepriseListeView";
import NotFound from "../views/NotFound";
import OffresListeView from "../views/OffresListeView";
import HomeView from "../views/HomeView";
import EntrepriseDetailView from "../views/EntrepriseDetailView";
import OffreDetailView from "../views/OffreDetailView";
import ProfileView from "../views/ProfileView";
import ProfileModifView from "../views/ProfileModifView";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <HomeView />
      </Route>

      <Route path="/entreprises">
        <EntrepriseListeView />
      </Route>

      <Route path="/entreprises/:id">
        {(params) => <EntrepriseDetailView id={params.id} />}
      </Route>

      <Route path="/offres">
        <OffresListeView />
      </Route>

      <Route path="/offres/:id">
        {(params) => <OffreDetailView id={params.id} />}
      </Route>

      <Route path="/profile">
        <ProfileView />
      </Route>

      <Route path="/profile/modif">
        <ProfileModifView />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
