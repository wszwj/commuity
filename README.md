
##### 环境
 1. node v5.12.0
 2. cnpm 4.2.0
 3. npm 3.3.9

##### 技术栈

> [vue](https://github.com/vuejs/vue)

> [vue-router](https://github.com/vuejs/vue-router)

> [vue-resource](https://github.com/vuejs/vue-resource)

> [webpack](http://webpack.github.io/docs/)

> [sui-mobile](http://m.sui.taobao.org/)

> [es6-babel](https://babeljs.io/docs/learn-es2015/)


```bash
# 安装依赖模块
cnpm install

# 启动服务
npm run dev

# 发布代码
npm run build

```


### 目录结构
<pre>
.
├── README.md           
├── dist                     // 项目build目录
├── config                   // 环境变量和入口，出口配置
├── static                   // 静态资源目录
├── build                    // 项目的配置文件目录
│   ├── dev-server.js        // 开发的服务配置
│   ├── webpack-dev-conf.js  // 开发的Webpack 配置文件
│   ├── webpack-prod-conf.js // 生产的Webpack 配置文件
│   ├── webpack-base-conf.js // 基本的Webpack 配置文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // css js 和图片资源
│   ├── data                 // 数据文件
│   ├── components           // 各种组件
│   ├── views                // 各种页面
│   ├── directives           // 各种指令
│   ├── filters.js           // 各种过滤器
│   ├── router.js            // 路由配置
│   └── main.vue             // 根组件
│   └── app.js               // Webpack 预编译入口         
├── index.html               // 项目入口文件
.
</pre>

