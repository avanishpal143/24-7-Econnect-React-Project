import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { execSync, spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function startBackendServer() {
  const backendPath = path.resolve(__dirname, 'blog-dashboard-20-july (1)', 'blog-dashboard-backend');
  if (!fs.existsSync(backendPath)) return;

  const req = http.get('http://127.0.0.1:5001/api/posts', () => {
    console.log('✅ CMS Backend is already active on http://localhost:5001');
  });

  req.on('error', () => {
    console.log('🚀 Starting CMS Backend Server on http://localhost:5001...');
    const backendProc = spawn('node', ['src/server.js'], {
      cwd: backendPath,
      stdio: 'inherit',
      shell: true,
    });

    process.on('exit', () => backendProc.kill());
    process.on('SIGINT', () => {
      backendProc.kill();
      process.exit();
    });
  });
}

function adminPlugin() {
  const adminDist = path.resolve(__dirname, 'dist', 'admin');
  const adminSrc = path.resolve(__dirname, 'blog-dashboard-20-july (1)', 'blog-dashboard-frontend');

  // If dist/admin doesn't exist yet, build it once
  if (!fs.existsSync(adminDist) && fs.existsSync(adminSrc)) {
    console.log('Building CMS Admin dashboard for /admin route...');
    try {
      execSync('npm run build -- --base=/admin/', { cwd: adminSrc, stdio: 'inherit' });
      const built = path.resolve(adminSrc, 'dist');
      if (fs.existsSync(built)) {
        fs.mkdirSync(adminDist, { recursive: true });
        fs.cpSync(built, adminDist, { recursive: true });
      }
    } catch (err) {
      console.warn('Could not auto-build admin dashboard:', err.message);
    }
  }

  const mimeMap = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
  };

  return {
    name: 'serve-admin-dashboard',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url.split('?')[0];

        if (url === '/admin' || url === '/admin/') {
          const indexPath = path.join(adminDist, 'index.html');
          if (fs.existsSync(indexPath)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            return fs.createReadStream(indexPath).pipe(res);
          }
        }

        if (url.startsWith('/admin/')) {
          const relPath = url.replace(/^\/admin\//, '');
          const filePath = path.join(adminDist, relPath);

          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            const contentType = mimeMap[ext] || 'application/octet-stream';
            res.setHeader('Content-Type', contentType);
            return fs.createReadStream(filePath).pipe(res);
          } else {
            // SPA fallback for /admin/* sub-routes (like /admin/login, /admin/posts)
            const indexPath = path.join(adminDist, 'index.html');
            if (fs.existsSync(indexPath)) {
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              return fs.createReadStream(indexPath).pipe(res);
            }
          }
        }

        next();
      });
    },
  };
}

async function start() {
  try {
    startBackendServer();

    const port = process.env.PORT ? parseInt(process.env.PORT) : 5174;
    const server = await createServer({
      configFile: false,
      plugins: [react(), adminPlugin()],
      server: {
        port,
        host: true,
        proxy: {
          '/api': {
            target: 'http://127.0.0.1:5001',
            changeOrigin: true,
            secure: false,
          },
        },
      },
    });
    await server.listen();
    server.printUrls();
    console.log(`\n  👉 CMS Admin Portal: http://localhost:${port}/admin/\n`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

start();
