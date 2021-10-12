import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStateValue } from './StateProvider';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import './EditItem.css';
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})
function EditItem() {
  const { id } = useParams();


  const [{ data }, dispatch] = useStateValue();
  let items = null;
  data.map((data) => {
    if (data.id == id)
      items = data;
  })

  const [name, setName] = useState(items.name);
  const [src, setSrc] = useState(items.src);
  const [quantity, setQuantity] = useState((parseInt)(items.quantity));
  const history = useHistory();
  const increment = () => {
    setQuantity(quantity => quantity + 1);
  }
  const decrement = () => {
    setQuantity(quantity => quantity - 1);
  }
  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "DELETE",
      id: id,
    })
    dispatch({
      type: 'PUSH',
      item: {
        id: uuidv4(),
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
        Update Item
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          label="Name"
          variant="outlined"
          color="primary"
          fullWidth
          required
          value={name}

          onChange={(e) => setName(e.target.value)}
        />

        <TextField className={classes.field}
          label="Image URL"
          variant="outlined"
          color="primary"
          fullWidth
          type="email"
          required
          value={src}

          onChange={(e) => setSrc(e.target.value)}
        />
        <TextField className={classes.field}
          label="ID"
          variant="outlined"
          color="primary"
          fullWidth

          inputProps={
            { readOnly: true, }
          }
        />
        <TextField className={classes.field}
          label="Amount"
          type="number"
          variant="outlined"
          color="primary"
          fullWidth
          required
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <div className="div_button">
          <div className="div_button2">
            <input
              type="button" value="+" onClick={increment} />

            <input
              type="button" value="-" onClick={decrement} />
          </div>
          <Button

            type="submit"
            color="secondary"
            variant="contained"
            size="small"
            endIcon={<KeyboardArrowRightIcon />}>
            update Item
          </Button>
        </div>
      </form>



    </Container>

  );

}


export default EditItem