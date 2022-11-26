## 1.项目初始化
- npm init vite
- 删除不需要的文件
- package.json > script > dev 加上 --host  --port 3002 --open

## 2.样式重置
- npm i reset-css
- main.ts中引入 import 'reset-css'

## 3.scss的安装和初步使用
- npm i --save-dev sass
- 初始化样式 assets>style>global

## 4.路径别名
- 安装 npm i -D @types/node
- ```
  import path from 'path'
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
- ```
- 别名提示tsconfig.json compilerOptions > 
-```
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/"]
    }
-```
## 5.样式模块化
- 创建 index.module.scss > .box{color: red}
- scss > import style from '../index.module.scss'
- <div className={style.box}></div>

## 5.安装antd @antd-design/icons

## 6.路由

## 7.react-redux redux-thunk

## 8.axios