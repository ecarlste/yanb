import { Message } from '@/models/message';
import { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const { email, name, message } = body;

  switch (method) {
    case 'POST':
      const newMessage: Message = {
        email,
        name,
        message,
      };

      console.log(newMessage);

      res.status(201).json(newMessage);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed!`);
  }
}

export default handler;
