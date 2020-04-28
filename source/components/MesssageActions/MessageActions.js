import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import css from './_MessageActions.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function MessageActions (props) {
  const [status, setStatus] = useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setStatus(event.target.value);
    props.changeMessageStatus(event.target.value);
  };

  return (
    <div className={css.wrapper}>
      <FormControl variant="outlined" className={classes.formControl} disabled={props.fetching || props.selected.size === 0}>
        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={status}
          onChange={handleChange}
        >
          <MenuItem value='new'>New</MenuItem>
          <MenuItem value='save'>Saved</MenuItem>
          <MenuItem value='deleted'>Deleted</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

MessageActions.propTypes = {
  changeMessageStatus: PropTypes.func,
  fetching: PropTypes.bool,
  selected: PropTypes.object
};
