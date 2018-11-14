import React, { Component } from 'react';
import './css/index.scss';
import Footer from "components/footer/footer.js";
import searchImg from './img/search.png';
import fetch from 'utils/fetch.js';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: null,
      RecommendData: null,
      goodsData: null
    }
  }
  componentDidMount() {
    this.getNavData();
  }
  getNavData() {
    fetch.get('/api/nav/list', {platform: 'WAP'}).then(res => {
      console.log(res)
    })
  }
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
