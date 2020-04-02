import React from 'react';

import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import useStyles from './styles';

export default function CheckList({ data, onChange, selected, isLoading, title, placeholder, ...props }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <Autocomplete
        id="check-list"
        loading={isLoading}
        multiple
        onChange={onChange}
        value={selected}
        options={data.map(item => item.name)}
        renderTags={(value, getTagProps) => {
          const tags = value.slice(0, 2).map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} className={classes.tag} />
          ));

          const length = value.length;

          return (
            <div>
              {tags}
              {length > 2 ? `+${length - 2}` : ''}
            </div>
          );
        }}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label={title}
            placeholder={placeholder}
          />
        )}
        {...props}
      />
    </FormControl>
  );
}
