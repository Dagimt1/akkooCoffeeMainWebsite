import React, { useState } from 'react';
import './NextPage.css';

const locations = [
  {
    city: 'Addis Ababa',
    description: 'Located in the heart of Addis Ababa, Akkoo Coffee brings you the finest Ethiopian coffee and traditional dishes in an inviting and authentic atmosphere.',
    backgroundImage: 'https://images.unsplash.com/photo-1484268234627-2278797bec04?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    city: 'Dubai',
    description: 'Our soon-to-open Akkoo Coffee location in Dubai will bring the rich flavors of Ethiopian coffee to the UAE, serving a unique fusion of tradition and innovation.',
    backgroundImage: 'https://images.unsplash.com/photo-1698076968475-13c4113391dc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    city: 'Bishoftu',
    description: 'Our serene Bishoftu location combines the tranquility of the lakeside with the rich heritage of Ethiopian coffee, making every visit an exceptional experience.',
    backgroundImage: 'https://images.unsplash.com/photo-1520716278696-8af47de5da00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const NextPage = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="next-page">
      <div className="intro-section">
        <div className="intro-left">
          <h2>Welcome to<br />Akkoo Coffee</h2>
          <p>Discover the unique experience of traditional Ethiopian coffee, served with passion and authenticity.</p>
        </div>

        <div className="intro-right">
          {/* Video Thumbnail */}
          <div className="video-thumbnail">
            <a href="https://www.youtube.com/watch?v=ZJ7ckonba7Y&ab_channel=ebstvworldwide" target="_blank" rel="noreferrer">
              <img src="https://img.youtube.com/vi/ZJ7ckonba7Y/maxresdefault.jpg" alt="Video Thumbnail" />
              <div className="play-button">▶</div>
            </a>
          </div>

          {/* Intro Quote */}
          <div className="intro-quote">
            <p>It doesn’t have to taste<br /> that way. But it does. It’s not your typical.<br /> It’s unnecessarily good.</p>
          </div>
        </div>
      </div>

      <div className="cards-container">
        {locations.map((location, index) => (
          <div
            key={index}
            className={`card ${activeCard === index || (index === 0 && activeCard === 0) ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => setActiveCard(0)}
            style={{
              backgroundImage: `url(${location.backgroundImage})`,
            }}
          >
            <h3>{location.city}</h3>
            <p>{location.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextPage;
