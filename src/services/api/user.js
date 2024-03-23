export const BASE_URL = 'http://10.31.33.97:8080/api';

export function getMe() {
  return fetch(`${BASE_URL}/me`, {
    credentials: 'include',
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 401) {
      return null;
    }
    throw new Error('Failed to fetch user data');
  });
}

export function loginUrl() {
  const redirectUrl = encodeURIComponent(location);
  return `http://127.0.0.1:8000/login?redirect=${redirectUrl}`;
}
export function logoutUrl() {
  const redirectUrl = encodeURIComponent(location);
  return `http://127.0.0.1:8000/logout?redirect=${redirectUrl}`;
}
