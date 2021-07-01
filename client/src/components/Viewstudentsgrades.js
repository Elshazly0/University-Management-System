import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ViewSchedule() {
  const classes = useStyles();

  const [CoursegradesList, setCoursegradesList] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:3000/api/Coursegrades').then( (allCoursegrades) => {
      setCoursegradesList(allCoursegrades.data); 
    })
  }, [])

  return (
      <>
      <h2>Students Course Grades</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell align="right">Student's name</TableCell>
            <TableCell align="right">Course name</TableCell>
            <TableCell align="right">grade</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {CoursegradesList.map((Coursegrade,key) => (
            <TableRow key={key}>
        
              <TableCell align="right">{Coursegrade.studentName}</TableCell>
              <TableCell align="right">{Coursegrade.CourseName}</TableCell>
              <TableCell align="right">{Coursegrade.grade}</TableCell>
              <TableCell align="right">
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </> 
  );
}