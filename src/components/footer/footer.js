import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.footers = [
      {
        link: '/',
        text: '首页',
        class: 'index'
      },
      {
        link: '/category',
        text: '分类',
        class: 'category'
      },
      {
        link: '/cart',
        text: '购物车',
        class: 'cart'
      },
      {
        link: '/user',
        text: '我的',
        class: 'user'
      },
    ];
  }
  
  render() {
    return (
      <div className="footer">
        {
          this.footers.map((item, index) => 
            <NavLink key={item.link} className={item.class} to={item.link} exact>
              <span>{item.text}</span>
            </NavLink>
          )
        }
      </div>
    );
  }
}

export default Footer;