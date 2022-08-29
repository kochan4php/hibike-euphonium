import JIKAN_API from "@/config/Jikan";
import axios from "axios";

const { get } = axios;

const getAnimeHibikeEuphonium = async () =>
  await get(`${JIKAN_API}/anime?q=hibike%20euphonium`);

const getNovelHibikeEuphonium = async () =>
  await get(`${JIKAN_API}/manga?q=hibike%20euphonium`);

const getAnimeVideos = async (id) =>
  await get(`${JIKAN_API}/anime/${id}/videos`);

const getCharacters = async (id) =>
  await get(`${JIKAN_API}/anime/${id}/characters`);

const getAnimeStats = async (id) =>
  await get(`${JIKAN_API}/anime/${id}/statistics`);

const getAnimeReviews = async (id) =>
  await get(`${JIKAN_API}/anime/${id}/reviews`);

const getDetailAnime = async (id) => await get(`${JIKAN_API}/anime/${id}/full`);

const getDetailNovel = async (id) => await get(`${JIKAN_API}/manga/${id}/full`);

const getDetailCharacter = async (id) =>
  await get(`${JIKAN_API}/characters/${id}/full`);

const getPhotoAnime = async (id) =>
  await get(`${JIKAN_API}/anime/${id}/pictures`);

const getPhotoNovel = async (id) =>
  await get(`${JIKAN_API}/manga/${id}/pictures`);

const getPhotoCharacter = async (id) =>
  await get(`${JIKAN_API}/characters/${id}/pictures`);

export {
  getAnimeHibikeEuphonium,
  getNovelHibikeEuphonium,
  getAnimeVideos,
  getCharacters,
  getDetailAnime,
  getAnimeStats,
  getAnimeReviews,
  getDetailNovel,
  getDetailCharacter,
  getPhotoAnime,
  getPhotoNovel,
  getPhotoCharacter,
};
