import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const root = {
  flexGrow: 1
}

export default class Header extends Component {


  render(){
    return (
      <div style={root}>
        <AppBar position="static">
          <Toolbar variant="dense" style={{
            backgroundColor: 'orange'
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
