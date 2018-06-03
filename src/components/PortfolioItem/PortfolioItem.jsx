import React, { Component } from 'react'
import GlobalClock from './../../assets/images/global-clock.jpg';
import './PortfolioItem.scss';

export default class PortfolioItem extends Component {
  render() {
    return (
      <div className="PorfolioItem">
        <div className="PortfolioItem-image">
          <img src={GlobalClock} alt="Global Clock" />
          <button className="PortfolioItem-button">See Project</button>
        </div>
        <div className="PortfolioItem-details">
          <h3>Project Name</h3>
          <p>Project Categories</p>
        </div>
      </div>
    )
  }
}
