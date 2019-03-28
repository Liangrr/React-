import React, { Component } from 'react';
import '../../styles/base/helloword.css'

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <h3>Hello Word</h3>
        <div className="text">
          <p>尝试React最简单的方式，就是使用这个Hello World的例子。您不需要安装安
            装任何东西，就可以新开一个浏览器窗口，来和我们一起实验这些例子。如果你
            更愿意使用一个本地的开发环境，那么请查看安装指南 。
          </p>
          <p>一个最简单的React例子是这样的:</p>
        </div>
        <div className="demo">
          ReactDOM.render(
            <p className="text-indent">&lt;h1&gt;Hello, world!&lt;/h1&gt;,</p> 
            <p className="text-indent">document.getElementById('root')</p> 
          );
        </div>
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

export default Hello;