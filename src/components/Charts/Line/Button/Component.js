import React, { useState, useRef } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { logarithmTypes } from 'config';

export default function LogarithmicButton({ onChange, type }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [logarithmType, setLogarithmType] = useState('log');

  const handleLogarithmicClick = () => {
    onChange(logarithmType);
  };

  const handleLinearClick = () => {
    onChange('linear');
  };

  const handleMenuItemClick = type => {
    setLogarithmType(type);
    onChange(type);
    setOpen(false);
  };

  const handleTypesToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ButtonGroup variant="text" ref={anchorRef} aria-label="split button">
        <Button onClick={handleLinearClick} disabled={type === 'linear'}>Linear</Button>
        <Button onClick={handleLogarithmicClick} disabled={type.includes('log')}>Logarithmic</Button>
        <Button
          disabled={!type.includes('log')}
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleTypesToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {Object.entries(logarithmTypes).map(([type, name]) => (
                    <MenuItem
                      key={type}
                      selected={type === logarithmType}
                      onClick={_ => handleMenuItemClick(type)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
