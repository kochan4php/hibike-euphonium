import JIKAN_API from "../config/Jikan";

const getAnimeVideos = async (id) => {
  const request = await fetch(`${JIKAN_API}/anime/${id}/videos`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

const getCharacters = async (id) => {
  const request = await fetch(`${JIKAN_API}/anime/${id}/characters`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

const getAnimeStats = async (id) => {
  const request = await fetch(`${JIKAN_API}/anime/${id}/statistics`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

const getAnimeReviews = async (id) => {
  const request = await fetch(`${JIKAN_API}/anime/${id}/reviews`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

const getDetailAnime = async (id) => {
  const request = await fetch(`${JIKAN_API}/anime/${id}/full`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

const getDetailNovel = async (id) => {
  const request = await fetch(`${JIKAN_API}/manga/${id}/full`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

const getDetailCharacter = async (id) => {
  const request = await fetch(`${JIKAN_API}/characters/${id}/full`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

const getPhotoAnime = async (id) => {
  const request = await fetch(`${JIKAN_API}/anime/${id}/pictures`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

const getPhotoNovel = async (id) => {
  const request = await fetch(`${JIKAN_API}/manga/${id}/pictures`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

const getPhotoCharacter = async (id) => {
  const request = await fetch(`${JIKAN_API}/characters/${id}/pictures`);

  if (request.ok) {
    const response = await request.json();
    return response.data;
  } else {
    return;
  }
};

export default {
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
