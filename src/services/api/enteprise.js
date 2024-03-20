import {BASE_URL} from "./user.js";

export function fetchAllEntrepise() {
    return fetch(
        `${BASE_URL}/entreprise`,
    ).then((response) => response.json());
}