import { Message } from '@/models/message';
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const { email, name, message } = body;

  switch (method) {
    case 'POST':
      const newMessage: Message = {
        email,
        name,
        message,
      };

      try {
        const result = await prisma.message.create({ data: newMessage });

        res.status(201).json(result);
      } catch (error: any) {
        console.error(error.message);
      }

      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed!`);
  }
}

export default handler;
