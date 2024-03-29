import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
const APIkey = "5c333966bb14d20047a3fe3d6491ade8";

export const getTrendingMovies = async (page = 1) => {
  const {
    data: { results },
  } = await instance.get("trending/movie/day", {
    params: {
      api_key: APIkey,
      page,
    },
  });
  return results;
};

export const getMovieByQwery = async (query, page = 1) => {
  const { data } = await instance.get("search/movie", {
    params: {
      api_key: APIkey,
      page,
      query,
    },
  });
  return data;
};

export const getMovieById = async (id) => {
  const { data } = await instance.get(`movie/${id}`, {
    params: {
      api_key: APIkey,
    },
  });
  return data;
};

export const getMovieCreditsById = async (id) => {
  const { data } = await instance.get(`movie/${id}/credits`, {
    params: {
      api_key: APIkey,
    },
  });
  return data;
};

export const getMovieReviewsById = async (id) => {
  const { data } = await instance.get(`movie/${id}/reviews`, {
    params: {
      api_key: APIkey,
    },
  });
  return data;
};
