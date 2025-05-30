import { defineConfig } from 'astro/config';
import Sonda from 'sonda/astro'; 

export default defineConfig({
  vite: {
    build: {
    sourcemap: true
    }
  },
  integrations: [
    Sonda() 
  ]
});
