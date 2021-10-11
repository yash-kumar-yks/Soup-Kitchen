import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})
function AddItem() {
  const history = useHistory();
  const [data, dispatch] = useStateValue();
  const [name, setName] = useState('');
  const [src, setSrc] = useState('');
  const [quantity, setQuantity] = useState(0);
 
  const classes = useStyles()
  const handleSubmit = (e) => {
    e.preventDefault();
   
   
    dispatch({
      type: 'PUSH',
      item: {
        id:uuidv4(),
        name: name,
        src: src,
        quantity: quantity
      }
    })
   
    history.push('/');
  }
 
  return (
    <Container size="sm">
    <Typography
    variant="h5" 
    color="textSecondary"
    component="h2"
    gutterBottom
  >
  Add a New Item
  </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField className={classes.field}
      label="Name" 
      variant="outlined" 
      color="primary" 
      fullWidth
      required
      onChange={(e) => setName(e.target.value)}
        />
        <TextField className={classes.field}
      label="Image URL" 
      variant="outlined" 
      color="primary" 
      fullWidth
      required
          onChange={(e) => setSrc(e.target.value)}
        />
        <TextField className={classes.field}
      label="Amount" 
      variant="outlined" 
      color="primary" 
      type="number"
      min="0"
      fullWidth
      required
          onChange={(e) => setQuantity(e.target.value)}
        />
       
        <Button 
        type="submit"
          color="secondary" 
          variant="contained"
          size="small"
          endIcon={<KeyboardArrowRightIcon />}>
          Add Item
        </Button>
      </form>
   </Container>
  );
}
 


export default AddItem