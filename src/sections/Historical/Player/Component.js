import React, { useRef } from 'react';

import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Play from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import IconButton from '@material-ui/core/IconButton';

import clsx from 'clsx';
import Draggable from 'react-draggable';

import useStyles from './styles';

const defaultPosition = { x: 0, y: 0 };

export default function Player({ status, onChange, value, onDrag }) {
  const classes = useStyles();

  const padRef = useRef();

  const position = {
    x: padRef.current
      ? Math.round(padRef.current.offsetWidth * value / 100)
      : 0,
    y: 0,
  };

  return (
    <Box className={classes.root}>
      <IconButton onClick={onChange} aria-label={status}>
        {status === 'playing' ? <Pause /> : <Play />}
      </IconButton>
      <div className={classes.progressWrapper}>
        <LinearProgress
          variant="determinate"
          value={value}
          className={classes.progress}
        />
        <Draggable
          axis="x"
          handle=".handle"
          position={position}
          defaultPosition={defaultPosition}
          grid={[25, 25]}
          scale={1}
          onDrag={onDrag}
        >
          <div ref={padRef} className={clsx(classes.pad, 'handle')}></div>
        </Draggable>
      </div>
    </Box>
  );
}
