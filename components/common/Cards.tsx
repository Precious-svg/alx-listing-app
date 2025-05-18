import React from 'react'

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
  }

const Cards: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
          <h3>{title}</h3>
           <p>{description}</p>
      </div>
    </div>
  )
}

export default Cards