import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // Scroll down function to scroll to the next section
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll down to the next section
      behavior: 'smooth'
    });
  };

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
            <h1 className="title">Akkoo Coffee</h1>
            <p className="description">
              Most people visit us expecting only good coffee, but they leave impressed by our “Buna Kurs” (barley flour
              with butter). From Machiatto to Café-latte, Espresso, and more—our coffee is exceptional.
            </p>

          </div>

          {/* Bottom Section */}
          <div className="bottom-info">
            <div className="beans-info">
              <h3>24/7 Service</h3>
              <p>
                We’re open around the clock. Stop by any time to enjoy good coffee and Ethiopian dishes in generous
                portions. Just come, sit back, and enjoy!
              </p>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <div className="scroll-down" onClick={handleScrollDown}>
            <span className="arrow-down"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
