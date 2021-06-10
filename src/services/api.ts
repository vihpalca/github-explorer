import axios from 'axios';

export const api = axios.create({
  url: 'https://api.github.com/users'
})

export async function getGithub() {
  const data = await axios.get('https://api.github.com/users/vihpalca/repos');
  return data;
} 