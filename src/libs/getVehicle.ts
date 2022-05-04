import axios from 'axios';

import { ICardCar } from '~/types';

export async function getVehicle(slug: string | string[]): Promise<ICardCar> {
  const urlFetch = process.env.VEHICLES_API;

  const { data } = await axios.get(`${urlFetch}/${slug}`);

  return data;
}
