import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import prettyMilliseconds from 'pretty-ms';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function DenseTable (props) {
  const classes = useStyles();

  const modifiedRows = props.rows.map((row) => {
    const fromFieldArray = row.from.split('@');
    const toFieldArray = row.from.split('@');
    return {
      ...row,
      from: `Phone: ${fromFieldArray[0]} Host: ${fromFieldArray[1]}`,
      to: `Phone: ${toFieldArray[0]} Host: ${toFieldArray[1]}`,
      duration: prettyMilliseconds(row.length, { colonNotation: true })
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Select</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {modifiedRows.map((row) => (
            <TableRow key={row.media_id}>
              <TableCell component="th" scope="row">
                {row.folder}
              </TableCell>
              <TableCell scope="row">
                <Checkbox
                  name={row.media_id}
                  disabled={props.fetching}
                  checked={props.selected.has(row.media_id)}
                  onChange={props.selectMessage}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell>{row.to}</TableCell>
              <TableCell>{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

DenseTable.propTypes = {
  rows: PropTypes.object.isRequired,
  selectMessage: PropTypes.func.isRequired,
  selected: PropTypes.object.isRequired,
  fetching: PropTypes.bool
};
