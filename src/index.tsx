/*
 * @Author: SunRay1017 13208295650@163.com
 * @Date: 2022-10-30 15:06:30
 * @LastEditors: SunRay1017 13208295650@163.com
 * @LastEditTime: 2023-01-09 22:24:45
 * @FilePath: \webpack-app\src\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
if(root) {
  createRoot(root).render(<App />)
}
