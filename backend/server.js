import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const limiter = rateLimit({ windowMs: 60*1000, max: 60 });
app.use(limiter);

// serve images
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/api/projects', (req, res) => {
  const dataPath = path.join(__dirname, 'data', 'projects.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Could not read projects' });
    try { res.json(JSON.parse(data)); } catch(e) { res.status(500).json({ error: 'Invalid projects data' }); }
  });
});

app.post('/api/contact', (req, res) => {
  // lightweight: log and return success for demo/development
  console.log('Contact form submission:', req.body);
  res.json({ ok: true });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Backend listening on', port));
