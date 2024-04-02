import { BASE_URL, getMe } from "./user";

export function fetchAllOffre(urlParams, filtre) {
  let url = `${BASE_URL}/offres`;

  const queryParams = [];
  if (urlParams) {
    queryParams.push(`page=${urlParams}`);
  }
  if (filtre) {
    if (filtre.date) {
      if (filtre.avantDate) {
        queryParams.push(
          `jourDeb[before]=${filtre.date}&order%5BjourDeb%5D=asc`,
        );
      }
      if (filtre.apresDate) {
        queryParams.push(
          `jourDeb[after]=${filtre.apresDate}&order%5BjourDeb%5D=desc`,
        );
      }
    }
    if (filtre.text && filtre.text !== "") {
      queryParams.push(`nomOffre=${filtre.text}`);
    }
    if (filtre.isCheckedStage) {
      queryParams.push(`Type.id=1`);
    }
    if (filtre.isCheckedAlternance) {
      queryParams.push(`Type.id=2`);
    }
    if (filtre.niveau !== undefined && filtre.niveau !== "") {
      queryParams.push(`level=${filtre.niveau}`);
    }
    if (filtre.duree !== undefined && filtre.duree !== "") {
      queryParams.push(`duree=${filtre.duree}`);
    }
    if (filtre.selectedSkills !== undefined) {
      if (filtre.selectedSkills.length > 0) {
        filtre.selectedSkills.forEach((skill) => {
          queryParams.push(`skillDemanders.skill.id=${skill}`);
        });
      }
    }
    if (filtre.lieux !== undefined && filtre.lieux !== "") {
      queryParams.push(`lieux=${filtre.lieux}`);
    }
  }

  // Si des paramètres de requête sont présents, les ajouter à l'URL
  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }
  return fetch(url).then((response) => response.json());
}

export function getOffresDetail(id) {
  return fetch(`${BASE_URL}/offres/${id}`).then((response) => response.json());
}

export function getOffreTypeId(id) {
  return fetch(`${BASE_URL}/Type/${id}/offres`).then((response) =>
    response.json(),
  );
}

export function getInscriptionUserId() {
  return getMe().then((user) => {
    if (user) {
      const requestOptions = {
        credentials: "include",
      };

      return fetch(
        `${BASE_URL}/users/${user.id}/inscriptions`,
        requestOptions,
      ).then((response) => {
        if (!response.ok) {
          throw new Error("Échec de la requête");
        }
        return response.json();
      });
    }
    throw new Error("Utilisateur non identifié");
  });
}
