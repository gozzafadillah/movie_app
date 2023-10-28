import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmFmOGEwNmRlMGQxMzdjYzRjOWYyOWQ2OGNkMGVlOCIsInN1YiI6IjY1M2MwYjFjYzhhNWFjMDBhZDM2OWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u5iLOP81sNhiZ7tWaP7kKzGXFfFgvfDKZZ_LwwjDpws",
  },
});

export default axiosInstance;
