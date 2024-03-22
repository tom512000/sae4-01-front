import { BASE_URL } from "./user";

export function fetchAllOffre() {
  return fetch(`${BASE_URL}/offres`).then((response) => response.json());
}

export function getOffresDetail(id) {
  return fetch(`${BASE_URL}/offres/${id}`).then((response) => response.json());
}

export function getOffreTypeId(id) {
  return fetch(`${BASE_URL}/Type/${id}/offres`).then((response) =>
    response.json(),
  );
}
