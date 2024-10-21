import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const generateScopedName = mode === 'production' ? '[hash:base64:5]' : '[local]_[hash:base64:2]'
  return {
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          exportType: 'default',
          ref: true,
          svgo: true,
          titleProp: true,
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        },
        include: '**/*.svg',
      }),
    ],
    server: {
      port: Number(env.VITE_PORT) || 3000,
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: generateScopedName,
      },
    },
  }
})
