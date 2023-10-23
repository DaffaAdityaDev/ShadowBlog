// pages/api/v1/saveMarkdown.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { content } = req.body;
  const filePath = path.join(process.cwd(), '/posts/test.md');

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to save the markdown file' });
    } else {
      res.status(200).json({ message: 'The markdown file has been saved' });
    }
  });
}
