export const BASE_URL = "http://127.0.0.1:8000/api";

export function getMe() {
    return fetch(`${BASE_URL}/me`, { credentials: "include" }).then(
        (response) => {
            if (response.ok) return response.json();
            return null;
        },
    );
}

export function loginUrl() {
    return `http://127.0.0.1:8000/login`;
}
export function logoutUrl() {
    return `http://127.0.0.1:8000/logout`;
}
