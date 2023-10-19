/*
 * @Author: BugMonkey 15298353932@163.com
 * @Date: 2023-10-16 20:01:35
 * @LastEditors: BugMonkey 15298353932@163.com
 * @LastEditTime: 2023-10-17 09:51:31
 * @FilePath: /wedding_invitation_card/invitation_card/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0'
},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
