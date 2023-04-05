/*
 * @Author: SunRay1017 13208295650@163.com
 * @Date: 2023-01-10 00:45:38
 * @LastEditors: SunRay1017 13208295650@163.com
 * @LastEditTime: 2023-01-10 01:07:28
 * @FilePath: \webpack-app\config\webpack.analy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const prodConfig = require('./webpack.prod.js'); // 引入打包配置
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin'); // 引入webpack打包速度分析插件
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 引入分析打包结果插件
const smp = new SpeedMeasurePlugin(); // 实例化分析插件
const { merge } = require('webpack-merge'); // 引入合并webpack配置方法

// 使用smp.wrap方法,把生产环境配置传进去,由于后面可能会加分析配置,所以先留出合并空位
module.exports = smp.wrap(
  merge(prodConfig, {
    plugins: [
      new BundleAnalyzerPlugin() // 配置分析打包结果插件
    ]
  })
);
