import React, { useEffect, useState } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ManageServices() {
  const classes = useStyles();
  // const basicServices=JSON.parse(localStorage.getItem('basicServices'));
  // const premiumServices=JSON.parse(localStorage.getItem('premiumServices'));

  const [basicServices,setBasicServices]=useState([]);
  const [premiumServices,setPremiumServices]=useState([]);

  useEffect(()=>{
    fetch('https://tranquil-citadel-82136.herokuapp.com/getBasicService')
    .then(res=>res.json())
    .then(data=>setBasicServices(data))
  },[])

  useEffect(()=>{
    fetch('https://tranquil-citadel-82136.herokuapp.com/getPremiumService')
    .then(res=>res.json())
    .then(data=>setPremiumServices(data))
  },[])

  const handleClickBasic=(id)=>{
      fetch('https://tranquil-citadel-82136.herokuapp.com/deleteBasicService',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({id})
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          alert('Basic Service Deleted Successfully');
          window.location.reload();
        }
        else{
          alert('Error. Basic Service could not be deleted.');
        }
      })
  }

  const handleClickPremium=(id)=>{
      fetch('https://tranquil-citadel-82136.herokuapp.com/deletePremiumService',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({id})
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          alert('Premium Service Deleted Successfully');
          window.location.reload();
        }
        else{
          alert('Error. Premium Service could not be deleted.');
        }
      })
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
        <h1>Basic Services</h1>
          <TableRow>
            <StyledTableCell>Service ID</StyledTableCell>
            <StyledTableCell align="right">Service Name</StyledTableCell>
            <StyledTableCell align="right">Validity</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Update/Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basicServices.map((service) => (
            <StyledTableRow key={service._id}>
              <StyledTableCell component="th" scope="row">
                {service._id}
              </StyledTableCell>
              <StyledTableCell align="right">{service.name}</StyledTableCell>
              <StyledTableCell align="right">{service.validity}</StyledTableCell>
              <StyledTableCell align="right">${service.price}</StyledTableCell>
              <StyledTableCell align="right"><EditIcon style={{cursor: 'not-allowed'}}></EditIcon><DeleteIcon style={{cursor:'pointer'}} onClick={()=>handleClickBasic(service._id)}></DeleteIcon></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
        <h1>Premium Services</h1>
          <TableRow>
            <StyledTableCell>Service ID</StyledTableCell>
            <StyledTableCell align="right">Service Name</StyledTableCell>
            <StyledTableCell align="right">Age Group</StyledTableCell>
            <StyledTableCell align="right">Validity</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Update/Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {premiumServices.map((service) => (
            <StyledTableRow key={service._id}>
              <StyledTableCell component="th" scope="row">
                {service._id}
              </StyledTableCell>
              <StyledTableCell align="right">{service.name}</StyledTableCell>
              <StyledTableCell align="right">{service.ageGroup}</StyledTableCell>
              <StyledTableCell align="right">{service.validity}</StyledTableCell>
              <StyledTableCell align="right">${service.price}</StyledTableCell>
              <StyledTableCell align="right"><EditIcon style={{cursor: 'not-allowed'}}></EditIcon><DeleteIcon style={{cursor:'pointer'}} onClick={()=>handleClickPremium(service._id)}></DeleteIcon></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}