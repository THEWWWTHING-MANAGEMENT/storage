import type { NextApiRequest, NextApiResponse } from 'next';
import { queryUsers } from '@/lib/postgres-client';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const users = await queryUsers();
    return res.status(200).json(users.rows);
  } catch (e) {
    return res.status(500).json({ message: (e as Error).message });
  }
}
