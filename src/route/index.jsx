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
import AboutView from "../views/AboutView";
import MentionsView from "../views/MentionsView";
import ConditionsView from "../views/ConditionsView";
import InscriptionView from "../views/InscriptionView";
import CandidaturesView from "../views/CandidaturesView";
import ProfileDeleteView from "../views/ProfileDeleteView";

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

        <Route path="/profile/delete">
            <ProfileDeleteView />
        </Route>

        <Route path="/candidatures">
            <CandidaturesView />
        </Route>

        <Route path="/inscription">
            <InscriptionView />
        </Route>

        <Route path="/a-propos">
            <AboutView />
        </Route>

        <Route path="/mentions">
            <MentionsView />
        </Route>

        <Route path="/conditions">
            <ConditionsView />
        </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
