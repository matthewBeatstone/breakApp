import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const root = {
  flexGrow: 1
}

export default class Header extends Component {


  render(){
    return (
      <div style={root}>
        <AppBar position="static">
          <Toolbar variant="dense" style={{
            backgroundColor: '#FF8C00'
          }}>
            <Typography variant="h6" color="inherit">
              LOGO
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}
