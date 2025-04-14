import { defineConfig } from 'vite'
import { resolve as node_resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import commonjs from 'vite-plugin-commonjs'
import dts from 'vite-plugin-dts'
// https://www.npmjs.com/package/vite-plugin-css-injected-by-js
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import importToConst from 'rollup-plugin-import-to-const'
import rollup_resolve from '@rollup/plugin-node-resolve'
import rollup_commonjs from '@rollup/plugin-commonjs'
import rollup_babel from '@rollup/plugin-babel'
import path from 'node:path'
// 组件命名插件
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@assets': path.resolve(__dirname, 'src/assets'),
  //   },
  // },
  // base: './',
  // publicDir: 'public',
  plugins: [
    vue(),
    vueJsx(),
    commonjs(/* options */),
    cssInjectedByJsPlugin(),
    DefineOptions(),
    dts({
      // 将所有声明合并到一个文件
      rollupTypes: true,
      // 指定 tsconfigPath
      tsconfigPath: './tsconfig.bundle.json',
      // 基于 package.json 的 `types` 字段生成，或者 `${outDir}/index.d.ts`
      insertTypesEntry: false,
      // 将源码里的 .d.ts 文件复制到 `outDir`
      copyDtsFiles: false,
      // 强制删除所有 Vite（Rollup）的原始产物
      declarationOnly: false,
      outDir: 'bundle',
    }),
  ],
  build: {
    assetsInlineLimit: 409600,
    outDir: 'bundle',
    assetsDir: './assets',
    commonjsOptions: { transformMixedEsModules: true },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖，忽略打包vue文件
      external: ['vue'],
      input: {
        // lk: node_resolve(__dirname, './src/components/Linking.vue'),
        lki: node_resolve(__dirname, '/src/components/index.ts'),
      },
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        manualChunks: (id: string) => {
          // 1. node_modules 中的文件合并
          // if (id.includes('node_modules')) return 'vendor'
          // 2. 所有文件合并
          return 'vendor'
        },
      },
      plugins: [
        rollup_commonjs(),
        rollup_resolve(),
        rollup_babel({ babelHelpers: 'bundled' }),
        // other plugins...
        importToConst(),
      ],
    },
    //压缩
    minify: 'esbuild',
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     // 生产环境时移除console.log调试代码
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // },
    // 库模式打包
    lib: {
      entry: node_resolve(__dirname, '/src/components/index.ts'),
      name: 'linking-kwy',
      fileName: (format) => `linking-kwy.${format}.js`,
      formats: ['es', 'cjs'],
    },
  },
})
