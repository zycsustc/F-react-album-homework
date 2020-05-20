const API = 'https://jsonplaceholder.typicode.com';

function fetchUser() {
  return fetch(`${API}/users/1`).then((data) => data.json());
}

function fetchAlbums() {
  return fetch(`${API}/users/1/albums`).then((data) => data.json());
}

function fetchPhotos(albumId) {
  return fetch(`${API}/albums/${albumId}/photos`).then((data) => data.json());
}

export { fetchUser, fetchAlbums, fetchPhotos };
