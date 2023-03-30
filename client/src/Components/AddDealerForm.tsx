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
  
    
type DealerFormValues = {
    dealer_id: string,
    dealer_name: string,
    dealer_type: string,
    contact: string
};

type DealerFormProps = {
  onSubmit: (values: DealerFormValues) => void;
};

const AddDealerForm: React.FC<DealerFormProps> = ({ onSubmit }) => {
  const {classes} = useStyles();
  const [values, setValues] = useState<DealerFormValues>({
  dealer_id: '',
  dealer_name: '',
  dealer_type: '',
  contact: ''
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
      <h1>Dealer Form</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Dealer ID"
          name="dealer_id"
          value={values.dealer_id}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="Dealer Name"
          name="dealer_name"
          value={values.dealer_name}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="Dealer Type"
          name="dealer_type"
          value={values.dealer_type}
          onChange={handleChange}
          required
        />
        <TextField
          className={classes.input}
          label="Contact "
          name="contact"
          value={values.contact}
          onChange={handleChange}
          required
        />
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
         Add 
        </Button>
      </form>
    </Container>
  );
};

export default AddDealerForm;
