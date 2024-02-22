import React from 'react';
import './Cards.css';
import posterimage from './images/400x700.png';
export const Cards = ({m}) => {
  return (
    <div className="card">
      <div className="card-image">
      <img src={m.Poster !== 'N/A' ? m.Poster : posterimage} alt="Movie Poster"></img>
      </div>
      <div className="card-content">
        <h2 className="card-title">{m.Title}</h2>
        <p className="card-text">{m.Type}</p>
        <p className="card-text">{m.Year}</p>
      </div>
    </div>


  )
}
