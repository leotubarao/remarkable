import type { NextApiRequest, NextApiResponse } from 'next';
import { parseStringPromise } from 'xml2js';

import { onFormatVehicle, loadVehicles } from '~/libs';
import { ICardCar } from '~/types';

export default async (
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void | NextApiResponse<any>> => {
  try {
    const { method } = request;

    if (method !== 'GET') {
      response.setHeader('Allow', ['GET']);
      return response.status(405).end(`Method ${method} Not Allowed`);
    }

    const data = await loadVehicles(true);

    const {
      Vehicles: { Vehicle: listVehicles },
    } = await parseStringPromise(data);

    const formattedVehicles = listVehicles.map((item: ICardCar) =>
      onFormatVehicle(item),
    );

    return response.status(200).json(formattedVehicles);
  } catch (error) {
    return response
      .status(500)
      .json({ statusCode: 500, message: error.message });
  }
};
