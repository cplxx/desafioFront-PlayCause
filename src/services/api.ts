import axios from "axios";

export const api = axios.create({
  baseURL: "https://chat-api-n6ks.onrender.com",
});
