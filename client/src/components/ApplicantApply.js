import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'; 


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Createapplicant() {
  const classes = useStyles();

  //Update the states 
  const [applicant, setApplicant]= useState({
    name: '',
    nationalId: '', 
    faculty: '',
      }); 

   const Createapplicant = () => {
       axios.post('http://localhost:3000/api/applicant', applicant).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Apply For UNI</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="name" variant="outlined" value = {applicant.name} onChange= {(event) => {
          setApplicant({ ...applicant, name :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="National ID" variant="outlined" value = {applicant.nationalId} onChange= {(event) => {
          setApplicant({ ...applicant, nationalId :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Faculty" variant="outlined" value = {applicant.faculty} onChange= {(event) => {
          setApplicant({ ...applicant, faculty :event.target.value}) 
          }}/>
     
      <Button variant="contained" color="primary" onClick ={Createapplicant}> 
        Apply 
      </Button>
    </form>
    </>
  );
}