import React, { Component } from 'react'
import GlobalClock from './../../assets/images/global-clock.jpg';
import './PortfolioItem.scss';

export default class PortfolioItem extends Component {

  state = {
    isHovered: false,
  }
  
  handleHoverIn = () => {
    this.setState({
      isHovered: true
    });
  }

  handleHoverOut = () => {
    this.setState({
      isHovered: false
    });
  }
  render() {
    const { isHovered  } = this.state;
    return (
      <div className="PorfolioItem" onMouseOver={this.handleHoverIn} onMouseLeave={this.handleHoverOut}>
        <div className="PortfolioItem-image">
          <img src={GlobalClock} alt="Global Clock" />
          {
            isHovered && (
              <button className="PortfolioItem-button">See Project</button>
            )
          }
        </div>
        <div className="PortfolioItem-details">
          <h3>Project Name</h3>
          <p>Project Categories</p>
        </div>
      </div>
    )
  }
}
