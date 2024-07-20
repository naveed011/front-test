import { Base_URL } from './constants';
import axios from 'axios';

export const fetchCollection = () => {
  /**
   * Step 2: Instead of directly returning the collection, fetch it from http://localhost:8001/cards
   */
  return axios.get(`${Base_URL}` + 'cards');
};

export const postCollection = (body) => {
  return axios.post(`${Base_URL}` + 'cards', { player: body })
}
