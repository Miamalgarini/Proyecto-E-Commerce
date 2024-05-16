const API = "https://api.mercadolibre.com/sites/MLA/search?q=";

const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("content-type", "application/x-www-form-urlencoded");

const urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "refresh_token");
urlencoded.append("client_id", "8642799178287618");
urlencoded.append("client_secret", "eZXxmOd7WXY4o5U7WXWAZfgMD87Z6ujN");
urlencoded.append("refresh_token", "TG-663957a0d33a1e000168863a-202802183");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
};

fetch("https://api.mercadolibre.com/oauth/token", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));



export const get = (path) => {
  console.log(`${API}${path}`);
  return fetch ( API + path + "&limit=12", {myHeaders}
  ).then((results) => results.json());
};

/* API Read Access Token
https://www.themoviedb.org/settings/api */