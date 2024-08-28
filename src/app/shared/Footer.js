import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer style={{height: "20px"}} className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
    
          <span className="text-muted float-none float-sm-right d-block mt-1 mt-sm-0 text-center">@JamalAhmad</span>
        </div>
      </footer>
    );
  }
}

export default Footer;