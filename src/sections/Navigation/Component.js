import React, { useState } from 'react';

import AppBar from 'sections/AppBar';
import Menu from 'sections/Menu';

import { isMobile } from 'utils';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(!isMobile);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <AppBar isMenuOpen={isMenuOpen} onMenuOpen={handleMenuOpen} />
      <Menu isOpen={isMenuOpen} onClose={handleMenuClose} onOpen={handleMenuOpen} />
    </>
  );
};
