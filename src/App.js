
import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { withStyles } from '@mui/styles';
const styles = theme => ({ 
  root: {
    width: '100%',
    marginTop: 20,
    overflowX: "auto"
   },
  table:{
    minWidth: 1080
  }
});

const customers =[
  {
  'id':1,
  'image':'http://placeimg.com/64/64/any',
  'name': '박규진',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'},

  {
    'id':2,
    'image':'http://placeimg.com/64/64/any',
    'name': '박세진',
    'birthday':'900215',
    'gender':'여자',
    'job':'직장인'},

    {
      'id':3,
      'image':'http://placeimg.com/64/64/any',
      'name': '박은진',
      'birthday':'860603',
      'gender':'여자',
      'job':'직장인'}


]
class App extends Component{
render() {
  const { classes } = this.props;
  return (
    <Paper className= {classes.root}>
      <Table className={classes.table}>
        <TableHead>
         <TableRow>
           <TableCell>번호</TableCell>
           <TableCell>이미지</TableCell>
           <TableCell>이름</TableCell>
           <TableCell>생년월일</TableCell>
           <TableCell>성별</TableCell>
           <TableCell>직업</TableCell>


         </TableRow>

        </TableHead>
        <TableBody>
      {customers.map(c =>{return(<Customer key={c.id} id={c.id} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} image={c.image}/>); })}
      </TableBody>
      </Table>
    
    </Paper>

   );
 }
}

export default withStyles(styles)(App);
