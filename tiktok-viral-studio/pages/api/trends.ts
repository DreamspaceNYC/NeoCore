import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const limit = Array.isArray(req.query.limit)
    ? req.query.limit[0]
    : req.query.limit || '5';
  try {
    const output = execSync(`codex tiktok:trending --limit ${limit} --json`).toString();
    const data = JSON.parse(output);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}