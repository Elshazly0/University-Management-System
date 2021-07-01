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

export default function CreateCoursegrades() {
  const classes = useStyles();

  //Update the states 
  const [Coursegrades, setCoursegrades]= useState({
    studentName: '',
    CourseName: '', 
    grade: '',
      }); 

   const CreateCoursegrades = () => {
       axios.post('http://localhost:3000/api/Coursegrades', Coursegrades).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Add Studient's grade </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="name" variant="outlined" value = {Coursegrades.studentName} onChange= {(event) => {
          setCoursegrades({ ...Coursegrades, studentName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="CourseName " variant="outlined" value = {Coursegrades.CourseName} onChange= {(event) => {
          setCoursegrades({ ...Coursegrades, CourseName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="grade" variant="outlined" value = {Coursegrades.grade} onChange= {(event) => {
          setCoursegrades({ ...Coursegrades, grade :event.target.value}) 
          }}/>
     
      <Button variant="contained" color="primary" onClick ={CreateCoursegrades}> 
        Apply 
      </Button>
    </form>
    </>
  );
}