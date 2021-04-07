import axios from "axios";

const db = axios.create({
  baseURL: "http://localhost:3001",
});



export { db };
