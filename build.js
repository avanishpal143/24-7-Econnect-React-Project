import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, cpSync, mkdirSync, existsSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function runBuild() {
  const outDir = resolve(__dirname, 'dist');
  const adminDir = resolve(outDir, 'admin');
  const uploadsDir = resolve(outDir, 'uploads');
  const apiSrc = resolve(__dirname, 'hostinger-upload', 'api');
  const htaccessSrc = resolve(__dirname, 'hostinger-upload', '.htaccess');
  const dbSqlSrc = resolve(__dirname, 'hostinger-upload', 'database_setup.sql');
  const adminSrc = resolve(__dirname, 'blog-dashboard-20-july (1)', 'blog-dashboard-frontend');

  console.log('\n🏗️  [1/4] Building 24*7 EConnect Website...\n');

  try {
    // 1. Build Main React Website
    await build({
      configFile: false,
      plugins: [react()],
      build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
          output: {
            assetFileNames: '[name][extname]',
            chunkFileNames: '[name].js',
            entryFileNames: 'main.js',
          },
        },
      },
    });
    console.log('   ✅ Main website build complete.');

    // 2. Build Admin Dashboard SPA
    console.log('\n🏗️  [2/4] Building CMS Admin Dashboard (/admin)...\n');
    if (existsSync(adminSrc)) {
      execSync('npm run build -- --base=/admin/', {
        cwd: adminSrc,
        stdio: 'inherit',
      });

      const adminBuildDist = resolve(adminSrc, 'dist');
      if (existsSync(adminBuildDist)) {
        if (!existsSync(adminDir)) {
          mkdirSync(adminDir, { recursive: true });
        }
        cpSync(adminBuildDist, adminDir, { recursive: true });
        console.log('   ✅ Admin Dashboard copied to dist/admin/');

        // Admin .htaccess for SPA routing under /admin/
        const adminHtaccess = `Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
`;
        writeFileSync(resolve(adminDir, '.htaccess'), adminHtaccess);
        console.log('   ✅ dist/admin/.htaccess created');
      }
    } else {
      console.warn('   ⚠️ Admin source not found at:', adminSrc);
    }

    // 3. Create Uploads Directory
    console.log('\n📁 [3/4] Setting up uploads directory...');
    if (!existsSync(uploadsDir)) {
      mkdirSync(uploadsDir, { recursive: true });
    }
    const uploadsHtaccess = `Options -Indexes
<FilesMatch "\\.(jpg|jpeg|png|gif|webp|svg|pdf)$">
    Order allow,deny
    Allow from all
</FilesMatch>
`;
    writeFileSync(resolve(uploadsDir, '.htaccess'), uploadsHtaccess);
    console.log('   ✅ dist/uploads/ ready');

    // 4. Copy Backend API, Database SQL & Root .htaccess
    console.log('\n📁 [4/4] Copying API & Hostinger configuration...');

    // Copy api/ folder into dist/api/
    const apiDest = resolve(outDir, 'api');
    if (existsSync(apiSrc)) {
      cpSync(apiSrc, apiDest, { recursive: true });
      console.log('   ✅ api/ backend folder copied');
    }

    // Copy root .htaccess into dist/
    if (existsSync(htaccessSrc)) {
      copyFileSync(htaccessSrc, resolve(outDir, '.htaccess'));
      console.log('   ✅ root .htaccess copied');
    }

    // Copy database_setup.sql into dist/
    if (existsSync(dbSqlSrc)) {
      copyFileSync(dbSqlSrc, resolve(outDir, 'database_setup.sql'));
      console.log('   ✅ database_setup.sql copied');
    }

    console.log('\n🎉  FULL BUILD SUCCESSFUL!\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📦  HOSTINGER UPLOAD INSTRUCTIONS:');
    console.log('    1. Open Hostinger File Manager → public_html/');
    console.log('    2. Upload all files & folders INSIDE "dist/" directly into public_html/');
    console.log('    3. Import "dist/database_setup.sql" in phpMyAdmin');
    console.log('    4. Update DB credentials in public_html/api/config.php');
    console.log('    5. Live Admin URL: https://yourdomain.com/admin');
    console.log('       Admin Email:    super@cms.com');
    console.log('       Admin Password: super123');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  } catch (e) {
    console.error('\n❌ Build failed:', e);
    process.exit(1);
  }
}

runBuild();
