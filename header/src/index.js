import React from 'react';
import { Grid, AppBar, Toolbar, Typography } from 'material-ui';

const Header = ({ count }) => (
  <AppBar position="static">
    <Toolbar>
      <Grid
        container
      >
        <Grid item xs={6} sm={10}>
          <Typography variant="h6">
            Micro-FEs in React
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography variant="h6">
            Cart Count {count}
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)

export default Header;
