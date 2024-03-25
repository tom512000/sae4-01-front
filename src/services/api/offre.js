import { BASE_URL } from './user';

export function fetchAllOffre(urlParams) {
  let url = `${BASE_URL}/offres`;
  if (urlParams) {
    url = `${BASE_URL}/offres?page=` + urlParams
  }
  return fetch(url).then((response) => response.json());
}

export function getOffresDetail(id) {
  return fetch(`${BASE_URL}/offres/${id}`).then((response) => response.json());
}

export function getOffreTypeId(id) {
  return fetch(`${BASE_URL}/Type/${id}/offres`).then((response) => response.json());
}
