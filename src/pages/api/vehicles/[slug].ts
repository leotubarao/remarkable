import type { NextApiRequest, NextApiResponse } from 'next';

import { formatVehicle, loadVehicles } from '~/libs';

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

    return response
      .status(200)
      .json(
        await formatVehicle(
          data,
          typeof query.slug === 'string'
            ? query.slug
            : query.slug.length && query.slug[0],
        ),
      );
  } catch (error) {
    return response
      .status(500)
      .json({ statusCode: 500, message: error.message });
  }
};
