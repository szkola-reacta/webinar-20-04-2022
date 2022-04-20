import { apiConfig, headers } from './config';

export const fetchPosts = () => {
  // if (2 === 2) {
  //   throw new Error("Ej, coś jest nie tak");
  // }
  return fetch(apiConfig.postsList, { headers }).then(response => response.json());
  // return axios.get(apiConfig.postsList);
}

export const fetchPostById = (id) => {
  return fetch(apiConfig.postsDetail(id), { headers }).then(response => response.json());
  // return axios.get(apiConfig.postsDetail(id));
}