import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import {Link} from 'react-router-dom'




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
            <div style={{height: 60, width: 60, justifyContent: 'center', alignItems:'center', borderRadius:50, backgroundColor:'#2C3539', display:'flex'}}>
              <Link to='/index'>
                <ArrowBackOutlinedIcon style={{fontSize: 50, color: '#FF8C00'}} />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}
