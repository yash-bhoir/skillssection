// Card.tsx

import React from 'react';

interface CardProps {
  height?: number; // Optional height
  width?: number; // Optional width
  header?: React.ReactNode; // Header content
  footer?: React.ReactNode; // Footer content
  children: React.ReactNode; // Content of the card
  style?: React.CSSProperties; // Additional styles for the card
}

const Card: React.FC<CardProps> = ({ height = 200, width = 300, header, footer, children, style }) => {
  const cardStyle: React.CSSProperties = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: '#0d1224', // Background color
    borderRadius: '8px', // Rounded corners
    border: '1px solid #1b2c68a0', // Border color
    backgroundImage: 'linear-gradient(to right, #0a0d37, #0d1224)', // Gradient background
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Box shadow
    ...style, // Merge additional styles
  };

  return (
    <div className="card" style={cardStyle}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
