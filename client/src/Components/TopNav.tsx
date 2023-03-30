import React from 'react'
import {Link} from "react-router-dom"
import {AppBar,Toolbar, Stack, Button, Typography} from "@mui/material"


const TopNav = () => {
  return (
    
      <AppBar position='static' style={{backgroundColor : 'white'}}>
        <Toolbar>
            <Typography variant='h4' color="black" style={{textDecoration:'none'}} sx={{flexGrow : 1}} component={Link} to="/" > The Gun Masters

            </Typography>
            <Stack direction='row' spacing={2}>
                <Button component={Link} to="/addPurchase" >Add Purchase</Button>
                <Button component={Link} to="/addDealer">Add Dealer</Button>
                <Button component={Link} to="/viewPurchased" >View Purchased</Button>
                <Button component={Link} to="/viewSold" >View Sold</Button>
                <Button component={Link} to="/viewDealers" >View Dealers</Button>
            </Stack>
            
        </Toolbar>
      </AppBar>
    
  )
}

export default TopNav
