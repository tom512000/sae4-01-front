import { BASE_URL } from "./user";

export function getSkillOffreId(id) {
  return fetch(`${BASE_URL}/offres/${id}/skills-offre`).then((response) =>
    response.json(),
  );
}

export function fetchAllSkill() {
  return fetch(`${BASE_URL}/skills`).then((response) => response.json());
}
