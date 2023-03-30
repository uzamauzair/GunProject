import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme)=>{
  return {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
      },
      input: {
        marginBottom: '20px',
      },
      button: {
        marginTop: '20px',
      },
    }});
  
    
type GunFormValues = {
  gun_id: string;
  gun_type: string;
  gun_serial_no: string;
  manufacturer: string;
  dealer_id: string;
};

type GunFormProps = {
  onSubmit: (values: GunFormValues) => void;
};

const SellGunForm: React.FC<GunFormProps> = ({ onSubmit }) => {
  const {classes} = useStyles();
  const [values, setValues] = useState<GunFormValues>({
    gun_id: '',
    gun_type: '',
    gun_serial_no: '',
    manufacturer: '',
    dealer_id: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <Container className={classes.root}>
      <h1>Sell Gun </h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Gun ID"
          name="gun_id"
          value={values.gun_id}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="Gun Type"
          name="gun_type"
          value={values.gun_type}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="Gun Serial Number"
          name="gun_serial_no"
          value={values.gun_serial_no}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="Manufacturer"
          name="manufacturer"
          value={values.manufacturer}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="Dealer ID"
          name="dealer_id"
          value={values.dealer_id}
          onChange={handleChange}
          required
        />
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sell
        </Button>
      </form>
    </Container>
  );
};

export default SellGunForm;
