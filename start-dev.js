import { createServer } from 'vite';
import react from '@vitejs/plugin-react';

async function start() {
  try {
    const server = await createServer({
      configFile: false,
      plugins: [react()],
      server: {
        port: 5173,
        host: true
      }
    });
    await server.listen();
    server.printUrls();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

start();
