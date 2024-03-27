import { BASE_URL } from "./user";

export function fetchAllEntrepise(urlParams, filtre) {
  let url = `${BASE_URL}/entreprise`;

  const queryParams = [];
  if (urlParams) {
    queryParams.push(`page=${urlParams}`);
  }
  if (filtre) {
    if (filtre.text && filtre.text !== "") {
      queryParams.push(`nomEnt=${filtre.text}`);
    }
  }

  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }
  return fetch(url).then((response) => response.json());
}

export function getEntrepriseDetail(id) {
  return fetch(`${BASE_URL}/entreprise/${id}`).then((response) =>
    response.json(),
  );
}

export function getOffreEntrepriseId(id) {
  return fetch(`${BASE_URL}/entreprise/${id}/offres`).then((response) =>
    response.json(),
  );
}
