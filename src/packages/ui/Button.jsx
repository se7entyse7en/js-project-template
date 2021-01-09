import React from 'react';

const Button = ({children, backgroundColor, textColor, textColorHover}) => (
  <div
    css={{
      padding: '32px',
      backgroundColor: backgroundColor,
      fontSize: '24px',
      borderRadius: '4px',
      textAlign: 'center',
      color: textColor,
      '&:hover': {
        color: textColorHover,
      }
    }}
  >
    {children}
  </div>
);

export default Button;
