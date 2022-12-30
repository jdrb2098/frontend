import axios from "axios";

export const backendAQ = axios.create({
  baseURL: "https://a-q-production.up.railway.app/",
});