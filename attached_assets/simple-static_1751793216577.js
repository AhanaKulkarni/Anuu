import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = process.env.PORT || 5000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.jsx': 'text/javascript',
  '.ts': 'text/typescript',
  '.tsx': 'text/typescript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  console.log(`Request: ${req.url}`);
  
  let filePath;
  
  // Determine file path based on request
  if (req.url === '/') {
    filePath = join(__dirname, 'client', 'dist', 'index.html');
  } else if (req.url.startsWith('/assets/')) {
    // Try built assets first
    filePath = join(__dirname, 'client', 'dist', req.url);
    if (!existsSync(filePath)) {
      // Fallback to attached assets  
      filePath = join(__dirname, 'attached_assets', req.url.replace('/assets/', ''));
    }
  } else {
    // Try built file first
    filePath = join(__dirname, 'client', 'dist', req.url);
    // For SPA routing - serve index.html for non-file requests
    if (!existsSync(filePath) && !req.url.includes('.')) {
      filePath = join(__dirname, 'client', 'dist', 'index.html');
    }
  }

  console.log(`Serving: ${filePath}`);

  if (!existsSync(filePath)) {
    console.log(`404: ${filePath}`);
    res.writeHead(404);
    res.end('File not found: ' + req.url);
    return;
  }

  try {
    const ext = extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(readFileSync(filePath));
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.writeHead(500);
    res.end('Server error: ' + error.message);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio running on port ${PORT}`);
});