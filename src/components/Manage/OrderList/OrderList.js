import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function OrderList({orderlist}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Package</TableCell>
            <TableCell align="right">Date Ordered</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderlist.map((list) => (
            <TableRow key={list._id}>
              <TableCell component="th" scope="row">
                {list.userName}
              </TableCell>
              <TableCell align="right">{list.userEmail}</TableCell>
              <TableCell align="right">{list.serviceName}</TableCell>
              <TableCell align="right">{list.date}</TableCell>
              <TableCell align="right"><Button variant="contained">Pending</Button><Button variant="contained">On Going</Button><Button variant="contained">Done</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}