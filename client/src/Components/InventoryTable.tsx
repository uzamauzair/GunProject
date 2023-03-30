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
  gun_id: string,
  gun_type: string,
  serial_no: string,
  manufacturer: string,
  dealer_id : string
) {
  return { gun_id, gun_type, serial_no, manufacturer, dealer_id };
}

const rows = [
  createData('GM-001', 'Shotgun', 'SN-001', 'Glog', 'D-005'),
  createData('GM-002', 'Rifle', 'SN-005', 'Colt', 'D-006'),
  createData('GM-003', 'Pistol','SN-015' , 'Ruger', 'D-005'),
  createData('GM-004', 'Revolver', 'SN-007', 'Smith & Wesson', 'D-001'),
  createData('GM-005', 'Assault Rifle', 'SN-003', 'Colt', 'D-002'),
  createData('GM-005', 'Assault Rifle', 'SN-003', 'Colt', 'D-002'),
  createData('GM-005', 'Assault Rifle', 'SN-003', 'Colt', 'D-002'),
  createData('GM-005', 'Assault Rifle', 'SN-003', 'Colt', 'D-002'),
  createData('GM-005', 'Assault Rifle', 'SN-003', 'Colt', 'D-002'),
  createData('GM-005', 'Assault Rifle', 'SN-003', 'Colt', 'D-002'),
];

export default function InventoryTable() {
  return (
    <div style={{ margin: '10px', padding: '30px',height: '500px',overflow:'auto' }}>
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{position:'sticky'}} >
          <StyledTableRow >
            <StyledTableCell>Gun Id </StyledTableCell>
            <StyledTableCell >Gun Type</StyledTableCell>
            <StyledTableCell >Serial No</StyledTableCell>
            <StyledTableCell >Manufacturer</StyledTableCell>
            <StyledTableCell >Dealer Id</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.gun_id}>
              <StyledTableCell component="th" scope="row">
                {row.gun_id}
              </StyledTableCell>
              <StyledTableCell >{row.gun_type}</StyledTableCell>
              <StyledTableCell >{row.serial_no}</StyledTableCell>
              <StyledTableCell >{row.manufacturer}</StyledTableCell>
              <StyledTableCell >{row.dealer_id}</StyledTableCell>
              <StyledTableCell><Button variant="contained" component={Link} to='/sellGun' color="primary" size="medium">Sell</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}

