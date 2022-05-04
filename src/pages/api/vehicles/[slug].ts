import type { NextApiRequest, NextApiResponse } from 'next';
import { parseStringPromise } from 'xml2js';

import { loadVehicles, onFormatVehicle } from '~/libs';
import { ICardCar } from '~/types';

export default async (
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void | NextApiResponse<any>> => {
  try {
    const { method, query } = request;

    if (method !== 'GET') {
      response.setHeader('Allow', ['GET']);
      return response.status(405).end(`Method ${method} Not Allowed`);
    }

    const data = await loadVehicles(true);

    const {
      Vehicles: { Vehicle: listVehicles },
    } = await parseStringPromise(data);

    const vehicle: ICardCar = listVehicles
      .map((item: ICardCar) => onFormatVehicle(item))
      .find(({ slug }: ICardCar) => slug === query.slug);

    return response.status(200).json(vehicle);
  } catch (error) {
    return response
      .status(500)
      .json({ statusCode: 500, message: error.message });
  }
};
