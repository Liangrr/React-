import React, { Component } from 'react';
import '../../styles/base/install.css'

class Install extends Component {
  render() {
    return (
      <div className="Install">
        <h3>安装说明</h3>
        <div className="text">
          <p>React 是非常灵活的，它可以被运用在多种项目中。您可以用它创建一个新的app，也可以渐进地将其加入到现有的代码库中，而不是完全重写现有代码。
          </p>
          <p>这里有几种途径，有助于快速上手：</p>
          <ul>
            <li>体验React</li>
            <li>创建新APP</li>
            <li>添加React技术到现有APP</li>
          </ul>
        </div>
        <h3>体验React</h3>
        <div className="text">
          <p>如果您只是想简单体验下 React，您可以先试试这个 Hello World 示例代码。
            您不需要安装任何东西，还能简单修改下代码，并且实时看到修改的效果。
          </p>
          <p>如果您更加喜欢使用自己的文本编辑器，您还可以使用左上角的菜单功能，下载
            您正在编辑的 HTML 文件 到本地。然后在本地浏览器中打开这个文件，它会缓慢
            地执行代码转换，所以请不要在生产环境中使用它。
          </p>
          <p>如果您想在一个完整的项目中使用 React，通常来说有两种方式来快速上手：
            创建 React 应用，或者添加 React 技术到现有应用中。
          </p>
        </div>
        <h3>创建新APP</h3>
        <p>
            构建一个新的 React 单页应用，Create React App 是您的最佳选择。它可
            以帮助您配置开发环境，以便您可以使用最新的 JavaScript 特性，还能提供
            一个友好的开发体验，并为生产环境优化您的应用。请注意：您开发机上的Node
            版本需要至少为6。
        </p>
        <div className="demo">
            <p className="text-indent">npm install -g create-react-app</p> 
            <p className="text-indent">create-react-app my-app</p>
            <p className="text-indent">cd my-app</p> 
            <p className="text-indent">npm start</p> 
        </div>
        <p>如果您安装了npm 5.2.0以以上版本的话，您可以使用npx作为一个更好的选择。</p>
        <div className="demo">
            <p className="text-indent">npx create-react-app my-app</p>
            <p className="text-indent">cd my-app</p> 
            <p className="text-indent">npm start</p> 
        </div>
        <p>Create React App 并不包含处理后端逻辑以及数据库。它只是一个前端的构建管道，
          所以您可以和任何后端技术搭配使用。它使用了 Babel 和 Webpack 这样的构建工具，
          但是在工作的时候，是零配置项的。
        </p>
        <p>当您已经准备好部署生产环境时，运行 npm run build ， 将会在 build 文件夹中
          创建一个优化好的应用版本。您可以从 Create React App的README 和 用户指南
           中了解更多信息。
        </p>
        <h3>添加 React技术 到现有应用</h3>
        <div className="text">
          <p>您不需要为了使用 React 而重写您的应用。</p>
          <p>我们建议您：将 React 添加到应用代码的一小部分中，比如某个小部件。
            以便您观测在您的用例中， React 是否工作良好。
          </p>
          <p>虽然 React 可以在没有构建管道的情况下使用 ，但是为了更高效的使用它，
            我们还是建议您使用：现代化的构建管道。这通常包括有:
          </p>
          <ul>
            <li>包管理器，比如 Yarn 或 npm。它可以让您使用庞大的第三方软件包生态系统，还能很方便的对依赖包进行安装或升级。</li>
            <li>构建工具，比如 webpack 或 Browserify。它允许您编写模块化代码，并把他们打包成为更小的文件文件，以优化加载时间。</li>
            <li>编译工具 比如 Babel。利用它，您可以编写包含新特性的代码，同时稳定运行在旧版本浏览器上。</li>
          </ul>
        </div>
        <h3>安装 React</h3>
        <div className="text">
          <p>注意：</p>
          <p>一旦安装了 React，我们强烈建议您将它配置为生产构建进程 ，以确保您在生产环境中，使用最新版本的 React。</p>
          <p>我们建议使用 Yarn 或 npm 来管理前端的依赖关系, 如果您还未使用过包管理器，阅读一下 Yarn中文文档 是个不错的快速入门方式。</p>
          <p>使用 Yarn 安装 React：</p>
        </div>
        <div className="demo">
          <p className="text-indent">yarn init</p> 
          <p className="text-indent">yarn add react react-dom</p>
        </div>
        <p>使用npm来安装 React：</p>
        <div className="demo">
          <p className="text-indent">npm init</p> 
          <p className="text-indent">npm install --save react react-dom</p>
        </div>
        <p>Yarn 和 npm 都会从 npm 仓库 下载软件包。</p>
        <p>特别提示：对于国内用户，我们强烈建议您设置npm仓库的地址为淘宝镜像。设置方法是：</p>
        <div className="demo">
          <p>npm config set registry https://registry.npm.taobao.org/</p>
        </div>
        <h3>开启 ES6 和 JSX</h3>
        <div className="text">
          <p>我们推荐您使用 Babel ，以便您在 JavaScript 代码中，使用 ES6 和 JSX。ES6
             是一系列现代化的 JavaScript 新特性的集合，可以使您的开发更简单。JSX 是与
              React 无缝搭配使用的 JavaScript 语言扩展。</p>
          <p>Babel 安装说明 说明了如何在多种不同的环境中配置 Babel。请确保您已经安装了
            babel-preset-react 和 babel-preset-es2015，并且在 `.babelrc 配置项 中
            启用了它们，这样的话，我们就准备就绪了。</p>
        </div>
        <h3>在 Hello World 中使用 ES6 和 JSX</h3>
        <div className="text">
          <p>我们建议您使用像 webpack 或 Browserify 这样的构建工具，以便您编写模块化
            的代码，并将其压缩为更小的文件，以优化加载时间。</p>
          <p>最简单的 React 示例，看起来是这样的：</p>
        </div>
        <div className="demo">
          <p>import React from 'react';</p>
          <p>import ReactDOM from 'react-dom';</p>
          ReactDOM.render(
            <p className="text-indent">&lt;h1&gt;Hello, world!&lt;/h1&gt;,</p> 
            <p className="text-indent">document.getElementById('root')</p> 
          );
        </div>
        <div className="text">
          <p>这段代码会渲染一个 ID 为 root 的 DOM 元素，所以在您的 HTML 文件中的某些地方，
            需要有一段这样的代码： &lt;div id="root"&gt;&lt;/div&gt;。</p>
          <p>同理，您可以在任何其它 JavaScript UI 库技术编写的已有应用中，将一个 React 组件渲染进一个 DOM 元素之中。</p>
          <p>了解有关将 React 与已有代码集成的更多信息。</p>
        </div>
        <h3>开发版本和生产版本</h3>
        <div className="text">
          <p>默认情况下，React 会包含很多有用的警告信息，在开发过程中是非常有用的。</p>
          <p>然而，这些警告会导致开发版本的 React 库文件体积过大，并且运行过慢，所以您应该在部署应用时的时候，使用生产版本。</p>
          <p>了解如何判断您的网页是否运行了合适的 React 版本, 以及如何更加有效地配置生产构建程序：</p>
          <ul>
            <li>使用 Create React App 构建生产版本应用</li>
            <li>使用独立文件构建生产版本应用</li>
            <li>使用 Brunch 构建生产版本应用</li>
            <li>使用 Browserify 构建生产版本应用</li>
            <li>使用 Rollup 构建生产版本应用</li>
            <li>使用 Webpack 构建生产版本应用</li>
          </ul>
        </div>
        <h3>使用 CDN</h3>
        <div className="text">
          <p>如果您不想使用 npm 来管理客户端软件包，'react' 和 'react-dom' npm 软件包，同样也提供了托管在 CDN 上的umd文件夹下的独立文件。</p>
        </div>
        <div className="demo">
          <p>&lt;script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;</p>
          <p>&lt;script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;</p>
        </div>
        <p>以上版本仅用于开发环境，并不适合生产环境。压缩优化的React生产版本，在下述位置可用：</p>
        <div className="demo">
          <p>&lt;script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"&gt;&lt;/script&gt;</p>
          <p>&lt;script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"&gt;&lt;/script&gt;</p>
        </div>
        <p>如果想要加载指定版本的 react 和 react-dom，请使用版本号来替换 16 字样即可。</p>
        <p>如果您在使用 Bower，可以通过 react 包来使用 React。</p>
        <h3>为什么使用 crossorigin 属性?</h3>
        <p>如果您从CDN引用React，我们建议保持设置 crossorigin 属性集：</p>
        <div className="demo">
          <p>&lt;script crossorigin src="..."&gt;&lt;/script&gt;</p>
        </div>
      </div>
    );
  }
}

export default Install;