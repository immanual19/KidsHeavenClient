import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

export default function DropdownOption({list}) {
  const classes = useStyles();
  
  
  const [status,setStatus]=useState('');
  const [open, setOpen] = React.useState(false);


  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {


        const currentStatus=event.target.value;
        setStatus(currentStatus);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick=(status)=>{
        const {_id}=list;
      const modifiedPart={id:_id,status:status};
      console.log(modifiedPart);

      fetch('http://localhost:8080/updateOrderStatus',{
          method:'PATCH',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify(modifiedPart)
      })
      .then(res=>res.json())
      .then(data=>{
          if(data){
              alert('Order status updated.');
              window.location.reload();
          }
          else{
              alert("Error. Order status couldn't be updated");
          }
      })

  }
  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{list.serviceStatus}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          onChange={handleChange}
          
        >

          <MenuItem onClick={()=>handleClick('Pending')} value={'Pending'}>Pending</MenuItem>
          <MenuItem onClick={()=>handleClick('On Going')} value={'On Going'}>On Going</MenuItem>
          <MenuItem onClick={()=>handleClick('Done')} value={'Done'}>Done</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}