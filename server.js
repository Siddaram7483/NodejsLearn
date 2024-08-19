import http from 'http';
import fs from 'fs/promises';
import url, { fileURLToPath } from 'url';
import path from 'path';

const PORT = process.env.PORT || 3000; // Provide a default port

// Get current path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === 'GET') {
      let filePath;
      switch (request.url) {
        case '/':
          filePath = path.join(__dirname, 'public', 'index.html');
          break;
        case '/about':
          filePath = path.join(__dirname, 'public', 'about.html');
          break;
        default:
          response.writeHead(404, { 'Content-Type': 'text/plain' });
          response.end('Not Found');
          return;
      }
      
      try {
        const data = await fs.readFile(filePath);
        response.setHeader('Content-Type', 'text/html');
        response.write(data);
        response.end();
      } catch (fileError) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Server Error: Unable to read file');
      }
      
    } else {
      response.writeHead(405, { 'Content-Type': 'text/plain' });
      response.end('Method Not Allowed');
    }
    
    console.log(`Request URL: ${request.url}`);
    console.log(`Request Method: ${request.method}`);

  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain' });
    response.end('Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
