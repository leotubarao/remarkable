import type { NextApiRequest, NextApiResponse } from 'next';

import { loadVehicles, formatVehicles } from '~/utils';

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

    return response.status(200).json(await formatVehicles(data));
  } catch (error) {
    return response
      .status(500)
      .json({ statusCode: 500, message: error.message });
  }
};
