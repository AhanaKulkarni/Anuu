import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from client directory
app.use(express.static(path.join(__dirname, 'client')));

// Serve assets
app.use('/assets', express.static(path.join(__dirname, 'attached_assets')));

// Handle all routes for React Router - fix the route pattern
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio live at http://localhost:${PORT}`);
  console.log(`Accessible on Replit at your public URL`);
});