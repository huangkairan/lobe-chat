import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const spaDir = resolve(root, 'public/spa');

mkdirSync(spaDir, { recursive: true });

const desktopAssets = resolve(root, 'dist/desktop/assets');
if (existsSync(desktopAssets)) {
  cpSync(desktopAssets, resolve(spaDir, 'assets'), { recursive: true });
  console.log('Copied dist/desktop/assets → public/spa/assets');
}

const mobileAssets = resolve(root, 'dist/mobile/assets');
if (existsSync(mobileAssets)) {
  cpSync(mobileAssets, resolve(spaDir, 'assets'), { recursive: true });
  console.log('Copied dist/mobile/assets → public/spa/assets');
}
