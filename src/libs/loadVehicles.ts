import axios from 'axios';

import { ICardCar } from '~/types';

export const loadVehicles = async (xml = false): Promise<ICardCar[]> => {
  const urlFetch = xml ? process.env.VEHICLES_XML : process.env.VEHICLES_API;

  const { data } = await axios.get(urlFetch);

  return data;
};
