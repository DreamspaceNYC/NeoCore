import type { NextApiRequest, NextApiResponse } from 'next';
import { execSync } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const { filePath } = req.body;
  if (!filePath) {
    res.status(400).json({ error: 'filePath is required' });
    return;
  }
  try {
    const output = execSync(`codex tiktok:caption --file "${filePath}" --json`).toString();
    const data = JSON.parse(output);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}