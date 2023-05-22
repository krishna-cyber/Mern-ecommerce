import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  headers: { "Content-Type": "multipart/form-data" },
});

export default server;
