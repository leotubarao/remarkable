import type { NextApiRequest, NextApiResponse } from 'next';

import { transporter } from '~/core/mailer';
import { libraryMailer } from '~/data/forms';

export default async (
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void | NextApiResponse<any>> => {
  try {
    const { method, body } = request;

    if (method !== 'POST') {
      response.setHeader('Allow', ['POST']);
      return response.status(405).end(`Method ${method} Not Allowed`);
    }

    const fieldFormatted = Object.entries(body.fields).map(([key, value]) => {
      const { placeholder } = libraryMailer.find(({ name }) => key === name);

      if (!placeholder || !value) return;

      return `<p><strong>${placeholder}:</strong> ${value}</p>`;
    });

    await transporter.sendMail({
      from: process.env.MAILER_FROM,
      to: process.env.MAILER_TO,
      subject: body.subject,
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        ...fieldFormatted,
        `</div>`,
      ].join('\n'),
    });

    return response
      .status(200)
      .json({ statusCode: 200, message: 'Form sent successfully!' });
  } catch (error) {
    return response
      .status(500)
      .json({ statusCode: 500, message: error.message });
  }
};
