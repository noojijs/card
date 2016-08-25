import React from 'react';

const cardStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
};

const Card = ({ children, style = {} }) => (
  <div
    style={{
      ...cardStyles,
      ...style,
      ...{ width: '250px', height: '250px' },
    }}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: React.PropTypes.string.isRequired,
  style: React.PropTypes.object,
};

export default Card;
