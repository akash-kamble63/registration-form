import * as React from 'react';

import {List , ListItem , ListItemText} from '@material-ui/core';


export default function App() {
  return (
    <div>
      {/* <Grid container item lg={12} spacing={3}>
        <Grid item lg={6} xs={6} styles={{margin:'10px',padding:'10px'}}><TextField label="Name" variant='standard'/></Grid>
        <Grid item lg={6} xs={6} styles={{margin:'10px',padding:'10px'}}><TextField label="Surname" variant='standard'/></Grid>
        <Grid item lg={6} xs={6} styles={{margin:'10px',padding:'10px'}}><TextField label="email" variant='standard'/></Grid>
        <Grid item lg={6} xs={6} styles={{margin:'10px',padding:'10px'}}><TextField label="password" variant='standard'/></Grid>
        </Grid> */}
        <List>

          <ListItem>
            <ListItemText primary='hello'/>
          </ListItem>
        </List>
        </div>
        );
}
