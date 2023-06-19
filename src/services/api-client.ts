import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2eeaae97e9044bf981465eee1a18395f",
  },
});
