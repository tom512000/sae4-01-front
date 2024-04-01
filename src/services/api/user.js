export const BASE_URL = "https://127.0.0.1:8000/api";

export function getMe() {
  return fetch(`${BASE_URL}/me`, {
    credentials: "include",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 401) {
      return null;
    }
    throw new Error("Failed to fetch user data");
  });
}

export function loginUrl() {
  const redirectUrl = encodeURIComponent(window.location);
  return `https://127.0.0.1:8000/login?redirect=${redirectUrl}`;
}
export function logoutUrl() {
  const redirectUrl = encodeURIComponent(window.location);
  return `https://127.0.0.1:8000/logout?redirect=${redirectUrl}`;
}

export function postUser(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/ld+json",
      Accept: "application/ld+json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  };
  fetch(`${BASE_URL}/users`, requestOptions).then((donnees) =>
    console.log(donnees),
  );
}

export function patchUser(data, userid) {
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/ld+json",
      Accept: "application/ld+json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  };
  fetch(`${BASE_URL}/users/${userid}`, requestOptions).then((donnees) =>
    console.log(donnees),
  );
}


export function postInscription(offreId) {
  return getMe().then((user) => {
    if (user) {
      const data = {
        Offre: `/api/offres/${offreId}`,
        User: `/api/users/${user.id}`,
        Status: 1,
        dateDemande: new Date().toISOString(),
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
          Accept: "application/ld+json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      };

      fetch(`${BASE_URL}/inscrires`, requestOptions).then((response) =>
          console.log(response),
      );

    } else {
      throw new Error("Utilisateur non indentifier");
    }
  });
}
