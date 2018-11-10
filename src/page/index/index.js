import React, { Component } from 'react';
import './css/index.scss';
import Footer from "components/footer/footer.js";
import searchImg from './img/search.png';

class Index extends Component {
  render() {
    return (
      <div className="home-wrap">
        <div className="search-bar">
          <img src={searchImg} alt=""/>
          <input type="text" placeholder="搜索宝贝"/>
          <div className="btn">搜索</div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;
