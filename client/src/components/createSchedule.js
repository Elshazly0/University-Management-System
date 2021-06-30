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

export default function Createschedule() {
  const classes = useStyles();

  //Update the states 
  const [schedule, setschedule]= useState({
    Day: '',
    FirstP: '', 
    SecondP: '',
    ThirdP: '', 
    FourthP: '', 
    FifthP: '',
    tutorial: ''
      }); 

   const createschedule = () => {
       axios.post('http://localhost:3000/api/schedule', schedule).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Schedule</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="day" variant="outlined" value = {schedule.Day} onChange= {(event) => {
          setschedule({ ...schedule, Day :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="1st" variant="outlined" value = {schedule.FirstP} onChange= {(event) => {
          setschedule({ ...schedule, FirstP :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="2nd" variant="outlined" value = {schedule.SecondP} onChange= {(event) => {
          setschedule({ ...schedule, SecondP :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="3rd" variant="outlined" value = {schedule.ThirdP} onChange= {(event) => {
          setschedule({ ...schedule, ThirdP :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="4th" variant="outlined" value = {schedule.FourthP} onChange= {(event) => {
          setschedule({ ...schedule, FourthP :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="5th" variant="outlined" value = {schedule.FifthP} onChange= {(event) => {
          setschedule({ ...schedule, FifthP :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="tut" variant="outlined" value = {schedule.tutorial} onChange= {(event) => {
          setschedule({ ...schedule, tutorial :event.target.value}) 
          }}/>
      <Button variant="contained" color="primary" onClick ={createschedule}> 
        Create 
      </Button>
    </form>
    </>
  );
}