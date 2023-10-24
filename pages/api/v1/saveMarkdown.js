// pages/api/v1/saveMarkdown.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { content, file_name } = req.body;
  const filePath = path.join(process.cwd(), '/posts', file_name + '.md');

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      res.status(500).json({ message: 'Unable to save file' });
      return;
    }

    res.status(200).json({ message: 'File saved successfully' });
  });
}
