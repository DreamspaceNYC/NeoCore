import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const { limit = 5, schedule = '18:00' } = req.body;
  try {
    const output = execSync(
      `codex tiktok:go-viral --limit ${limit} --schedule "${schedule}" --json`
    ).toString();
    const data = JSON.parse(output);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}