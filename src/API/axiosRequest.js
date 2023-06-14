import axios from "axios";

export default axios.create({
  baseURL: "https://github.com",
  headers: {
    "Content-type": "application/json",
  },
});
