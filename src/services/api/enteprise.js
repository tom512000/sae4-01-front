import { BASE_URL } from './user';

export function fetchAllEntrepise(urlParams) {
  let url = `${BASE_URL}/entreprise`;
  if (urlParams) {
    url = `${BASE_URL}/entreprise?page=` + urlParams
  }
  return fetch(url).then((response) => response.json());
}

export function getEntrepriseDetail(id) {
  return fetch(`${BASE_URL}/entreprise/${id}`).then((response) => response.json());
}

export function getOffreEntrepriseId(id) {
  return fetch(`${BASE_URL}/entreprise/${id}/offres`).then((response) => response.json());
}
