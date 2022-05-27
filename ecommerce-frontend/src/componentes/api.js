const BASE_URL = "";

async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "http://cc3e-2800-98-1123-13bd-a001-410a-9163-4be7.ngrok.io",
    "Access-Control-Allow-Credentials": "true",
  };
  options.credentials = "include";
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const api = {
  chats: {
    chats() {
      return callApi(`/api/chats`);
    },
    activos() {
      return callApi(`/api/chats/activo`, {
        method: "GET",
      });
    },
    chatsEspera() {
      return callApi(`/api/chats/espera`, {
        method: "GET",
      });
    },
    estado(params) {
      return callApi(`api/chats/state`, {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
  },
};

export default api;
