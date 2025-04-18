import axios from "axios";

const ApiRequest = axios.create({
  baseURL: "https://mobodb.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiRequest