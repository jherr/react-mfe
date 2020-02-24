import React from 'react';

const Header = ({ count }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '80% 20%' }}>
    <div>
      Header
    </div>
    <div>
      Cart count: {count}
    </div>
  </div>
)

export default Header;
