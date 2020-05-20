const API = 'https://jsonplaceholder.typicode.com';

function fetchUser() {
  return fetch(`${API}/users/1`).then((data) => data.json());
}

export { fetchUser };
