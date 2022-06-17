import JIKAN_API from "../config/Jikan";

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
  getDetailAnime,
  getDetailNovel,
  getDetailCharacter,
  getPhotoAnime,
  getPhotoNovel,
  getPhotoCharacter,
};
