import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  person: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ person: 'Jane Doe' });
}
