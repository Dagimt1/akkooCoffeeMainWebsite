import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-container">
        {/* Background image */}
        <img
          decoding="async"
          sizes="max(100vw - 12px, 1px)"
          srcSet="https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coffee leaves background"
          className="background-image"
        />

        {/* Content */}
        <div className="overlay">
          <div className="text-container">
            <h2 className="tagline">Enjoy the taste of</h2>
            <h1 className="title">botanical</h1>
            <p className="description">
              Our coffee doesn’t have to taste that way. But it does. It’s not your typical. It’s unnecessarily good.
              Maybe that’s because we’re unnecessarily driven.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="bottom-info">
            <div className="beans-info">
              <h3>99+ Beans</h3>
              <p>“Too far” is exactly where we want to be. All in the name of coffee.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
