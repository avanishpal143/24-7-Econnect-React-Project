import { build } from 'vite';
import react from '@vitejs/plugin-react';

async function runBuild() {
  try {
    await build({
      configFile: false,
      plugins: [react()],
    });
    console.log('Build completed successfully!');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

runBuild();
