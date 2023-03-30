import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(
  dealer_id: string,
  dealer_name: string,
  dealer_type: string,
  contact: string
) {
  return { dealer_id,dealer_name,dealer_type, contact };
}

const rows = [
  createData('D-001', 'David', 'Purchase', '0777609615'),
  createData('D-003', 'David', 'Sell', '0777609615'),
  createData('D-005', 'David', 'Purchase', '0777609615'),
  createData('D-007', 'David', 'Sell', '0777609615'),
  createData('D-009', 'David', 'Purchase', '0777609615'),
  createData('D-011', 'David', 'Sell', '0777609615'),
  createData('D-013', 'David', 'Purchase', '0777609615'),
  createData('D-015', 'David', 'Sell', '0777609615'),
];

export default function ViewDealerTable() {
  return (
    <div style={{ margin: '10px', padding: '30px',height: '500px',overflow:'auto' }}>
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{position:'sticky'}} >
          <StyledTableRow >
            <StyledTableCell>Dealer Id </StyledTableCell>
            <StyledTableCell >Dealer Name</StyledTableCell>
            <StyledTableCell >Type</StyledTableCell>
            <StyledTableCell >Contact</StyledTableCell>
            
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.dealer_id}>
              <StyledTableCell component="th" scope="row">
                {row.dealer_id}
              </StyledTableCell>
              <StyledTableCell >{row.dealer_name}</StyledTableCell>
              <StyledTableCell >{row.dealer_type}</StyledTableCell>
              <StyledTableCell >{row.contact}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}

