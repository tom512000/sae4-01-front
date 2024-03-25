import { BASE_URL } from './user';

export default function getSkillOffreId(id) {
  return fetch(`${BASE_URL}/offres/${id}/skills-offre`).then((response) => response.json());
}
