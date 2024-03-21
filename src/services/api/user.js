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
    const redirectUrl = encodeURIComponent(location);
    return `http://127.0.0.1:8000/login?redirect=${redirectUrl}`;
}
export function logoutUrl() {
    const redirectUrl = encodeURIComponent(location);
    return `http://127.0.0.1:8000/logout?redirect=${redirectUrl}`;
}
