import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5c38f42463494731a4d85f48b3892ef8",
  },
});
