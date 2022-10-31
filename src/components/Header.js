import React from 'react';

const headerStyle = {
  fontSize: '6rem',
  fontWeight: '600',
  marginBottom: '2rem',
  color: '#ececec',
  textTransform: 'lowercase',
  textAlign: 'center',
  padding: '20px 0',
  lineHeight: '1.5rem',
};
const Header = () => (
  <header>
    <h1
      style={headerStyle}
    >
      todos
    </h1>
  </header>
);

export default Header;
