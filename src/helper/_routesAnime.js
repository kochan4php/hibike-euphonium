import createRoute from "./createRoute";

const routesAnime = (id) => [
  createRoute(`/anime/${id}/details`, "Details"),
  createRoute(`/anime/${id}/characters`, "Characters"),
  createRoute(`/anime/${id}/videos`, "Videos"),
  createRoute(`/anime/${id}/stats`, "Stats"),
  createRoute(`/anime/${id}/reviews`, "Reviews"),
  createRoute(`/anime/${id}/pictures`, "Pictures"),
];

export default routesAnime;
