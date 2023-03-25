// src/api.ts
import axios from 'axios';
import {IAPODData} from '../types';

export const fetchData = (): Promise<IAPODData | null> => {
  return axios
    .get('https://apod.as93.net/apod')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
      return null;
    });
};
