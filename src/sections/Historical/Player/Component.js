import React, { useState, useRef, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Play from '@material-ui/icons/PlayArrow';
import Reset from '@material-ui/icons/SettingsBackupRestore';
import Pause from '@material-ui/icons/Pause';
import IconButton from '@material-ui/core/IconButton';

import clsx from 'clsx';
import Draggable from 'react-draggable';

import useStyles from './styles';

const defaultPosition = { x: 0, y: 0 };

export default function Player({ status, onChange, value, onDrag, date, onReset }) {
  const [isDraging, setIsDraging] = useState();
  const [, updateAfterMount] = useState();
  const classes = useStyles({ date, isPlaying: status === 'playing' });

  const padRef = useRef();

  useEffect(_ => {
    updateAfterMount(null);
  }, [updateAfterMount]);

  const position = {
    x: padRef.current
      ? Math.round((padRef.current.offsetWidth - 20) * value / 100)
      : 0,
    y: 0,
  };

  function handleDragStart() {
    setIsDraging(true);
  }

  function handleDragStop() {
    setIsDraging(false);
  }

  return (
    <Box display="flex" bgcolor="background.paper" className={clsx(classes.root, classes.controls)}>
      <Box className={classes.box}>
        {
          (status === 'paused' && value === 100)
            ? (
              <IconButton onClick={onReset} aria-label={status}>
                <Reset />
              </IconButton>
            ) : (
              <IconButton onClick={onChange} aria-label={status}>
                {
                  status === 'playing'
                    ? <Pause />
                    : <Play />
                }
              </IconButton>
            )
        }
        <div className={classes.progressWrapper}>
          <LinearProgress
            variant="determinate"
            value={value}
            className={clsx(classes.progress, isDraging && 'without-transition')}
          />
          <Draggable
            axis="x"
            handle=".handle"
            position={position}
            defaultPosition={defaultPosition}
            scale={1}
            onDrag={onDrag}
            onStart={handleDragStart}
            onStop={handleDragStop}
          >
            <div ref={padRef} data-tip="" className={clsx(classes.pad, 'handle', isDraging && 'without-transition')}></div>
          </Draggable>
        </div>
      </Box>
    </Box>
  );
}
