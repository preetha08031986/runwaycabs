import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000/api',
        changeOrigin: true,
      },
      
    },

  },
});



// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api', // Adjust the backend URL
// });

// export default api;




