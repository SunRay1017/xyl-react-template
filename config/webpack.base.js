/*
 * @Author: SunRay1017 13208295650@163.com
 * @Date: 2023-01-09 22:19:07
 * @LastEditors: SunRay1017 13208295650@163.com
 * @LastEditTime: 2023-01-10 21:23:41
 * @FilePath: \webpack-app\config\webpack.base.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// webpack.base.js
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// console.log("NODE_ENV", process.env.NODE_ENV);
// console.log("BASE_ENV", process.env.BASE_ENV);
const isDev = process.env.NODE_ENV === "development"; // 是否是开发模式
module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
  output: {
    filename: "static/js/[name].[chunkhash:8].js", // 每个输出js的名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
  },
  cache: {
    type: "filesystem", // 使用文件缓存
  },
  module: {
    rules: [
      {
        test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/images/[name].[contenthash:8][ext]", // 文件输出目录和命名
        },
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/fonts/[name].[contenthash:8][ext]", // 文件输出目录和命名
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: "static/media/[name].[contenthash:8][ext]", // 文件输出目录和命名
        },
      },

      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        include: [path.resolve(__dirname, "../src")], //只对项目src文件的ts,tsx进行loader解析
        use: ["thread-loader", "babel-loader"],
      },
      {
        test: /.css$/, //匹配 css 文件
        use: [
          // isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "style-loader" 
          ,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /.less$/, //匹配所有的 less 文件
        include: [path.resolve(__dirname, "../src")],
        use: [
          // isDev ? "style-loader" : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css,
          "style-loader" ,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
    alias: {
      "@": path.join(__dirname, "../src"),
    },
    modules: [path.resolve(__dirname, "../node_modules")], // 查找第三方模块只在本项目的node_modules中查找
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    // 将环境变量注入到业务代码中
    new webpack.DefinePlugin({
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
    }),
  ],
};
