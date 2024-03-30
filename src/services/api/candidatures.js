import { BASE_URL, getMe } from "./user";

export default async function fetchUserInscriptions() {
  const meData = await getMe();
  const requestOptions = {
    method: "GET",
    credentials: "include",
  };
  return fetch(
    `${BASE_URL}/users/${meData.id}/inscriptions`,
    requestOptions,
  ).then((response) => response.json());
}
