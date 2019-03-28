import React, { Component } from 'react';
import '../../styles/common/nav.css'
import { NavBar, Icon } from 'antd-mobile';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <NavBar
          mode="dark"
          leftContent={
            <Icon type="left"></Icon>
          }
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
      </div>
    );
  }
}

export default Nav;
