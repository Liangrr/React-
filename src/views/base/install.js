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
        <div className="demo">
          ReactDOM.render(
            <p className="text-indent">&lt;h1&gt;Hello, world!&lt;/h1&gt;,</p> 
            <p className="text-indent">document.getElementById('root')</p> 
          );
        </div>
        <p>Create React App 并不包含处理后端逻辑以及数据库。它只是一个前端的构建管道，
          所以您可以和任何后端技术搭配使用。它使用了 Babel 和 Webpack 这样的构建工具，
          但是在工作的时候，是零配置项的。
        </p>
        <p>当您已经准备好部署生产环境时，运行 npm run build ， 将会在 build 文件夹中
          创建一个优化好的应用版本。您可以从 Create React App的README 和 用户指南
           中了解更多信息。
        </p>
        <div className="text">
          <p>它在页面中，渲染了一个 "Hello, world!" 的标题出来。</p>
          <p>在接下来的几节中，我们将逐步向您介绍如何使用React。我们将详细了解React
            应用的构成模块：元素element和组件component。一旦您掌握了它们，你就可以
            使用这些简单可复用的代码，来创建更加复杂的应用了。
          </p>
        </div>
        <h3>有关JavaScript的小提示</h3>
        <div className="text">
          <p>React是一个JavaScript库，所以掌握它的前提就是：你已经有了相关JavaScript
            的基础理解能力。如果您感觉基础还稍稍欠缺的话，为了您能够更加轻松的跟上我们
            的进度，在这里，我们建议您重温一下有关JavaScript的基础知识。</p>
          <p>在接下来的学习中，我们将要使用了一些ES6的语法。由于这些语法还比较新，我们
            会尽量谨慎的使用他们。但是还是建议您去熟悉一下如下内容：箭头函数、 类、 
            模板字符串、 let 以及 const 声明。您可以使用 Babel REPL 来查看ES6的编译结果。
          </p>
        </div>
      </div>
    );
  }
}

export default Install;