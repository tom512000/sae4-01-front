import {BASE_URL} from "./user.js";

export function fetchAllEntrepise() {
    return fetch(
        `${BASE_URL}/entreprise`,
    ).then((response) => response.json());
}

export function getEntrepriseDetail(id){
    return fetch(`${BASE_URL}/entreprise/${id}`)
        .then(response => {
            return response.json()
        })
}

export function getOffreEntrepriseId(id){
    return fetch(`${BASE_URL}/entreprise/${id}/offres`)
        .then(response => {
            return response.json()
        })
}