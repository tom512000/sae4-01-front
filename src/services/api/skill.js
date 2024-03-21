import {BASE_URL} from "./user.js";

export function getSkillOffreId(id){
    return fetch(`${BASE_URL}/offres/${id}/skills-offre`)
        .then(response => {
            return response.json()
        })
}