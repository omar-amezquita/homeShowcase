import React from 'react';

import './Footer.scss';

const Header = () => (
  <footer>
    <address>
      Copyright © {(new Date()).getFullYear()} Omar Amézquita Manzanares
    </address>
  </footer>
);

export default Header;
