/* eslint no-nested-ternary:0 */
import React from 'react';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import "../../styles/common/menu.css"
import Page from './page.js'

// 获取数据
const data = require('../../stores/index').default

class MenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      show: false,
      title:'Hello Word',
      obj:{
        hello:false,
        install:true,
        jsxIntroduce:false
      }
    };
  }
  onChange = (value) => {
    // let label = '';
    let theme = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        // label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              // label += `${cItem.label}`;
              theme =  `${cItem.label}`;
            }
          });
        }
      }
    });
    // console.log(label)
    this.jumpLink(theme)
    this.setState({
      title:theme
    })
    
  }
  jumpLink(theme){
    let _this = this;
    let obj = this.state.obj;
    // 遍历对象全部页面隐藏
    Object.keys(this.state.obj).forEach(function(key){
      _this.state.obj[key] = false;
    })
    // 判断要显示的界面
    if (theme === 'Hello Word') {
      obj.hello = !obj.hello;
    }else if(theme === '安装') {
      obj.install = !obj.install;
    }else if(theme === 'JSX简介') {
      obj.jsxIntroduce = !obj.jsxIntroduce;
    }
  }

  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { initData, show, obj } = this.state;
    const menuEl = (
      <Menu
        className="foo-menu"
        data={initData}
        // value={['1', '3']}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.6}
      />
    );
    const loadingEl = (
      <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'menu-active' : ''}>
        <div>
          <NavBar
            leftContent="React中文"
            mode="light"
            onLeftClick={this.handleClick}
            className="top-nav-bar"
          >
            {this.state.title}
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
        {/* 判断展示哪个页面 */}
        {<Page obj={obj}/>} 
      </div>
    );
  }
}

export default MenuExample;