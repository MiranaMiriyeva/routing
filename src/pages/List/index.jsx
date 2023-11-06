import React, { useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const List = ({userData}) => {
     const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
         .then(res=>setTimeout(()=>setUsers(res.data),1500))
    },[])
  return (
    <div>    {users.length?     <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">User Name</TableCell>
          <TableCell align="right">User Email</TableCell>
          <TableCell align="right">User Phone</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((item) => (
          <TableRow
            key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell >
              {item.id}
            </TableCell>
            <TableCell align="right">{item.name}</TableCell>
            <TableCell align="right">{item.email}</TableCell>
            <TableCell align="right">{item.phone}</TableCell>
            <TableCell align="right">   
            <Link to={`/detail/${item.id}`}>
              <Button variant="contained" color="secondary">Details</Button>
           </Link>

            
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer> : 
     <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
       <CircularProgress color="secondary" />
     </Box>
    
 }
 
   

 </div>
  )
}

export default List