import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import {Link} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import MediaQuery from 'react-responsive';
import Cart from '../components/Cart.js';







const root = {
  flexGrow: 1,
}

const modal = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
  borderRadius:50
};

const modalContainer = {
    width: '100%',
    height: 500,
    borderRadius: 30,
    backgroundColor: '#2C3539'
};

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState: false
    }
  }

  openModal(){
    this.setState({modalState: true})
  }
  closeModal(){
    this.setState({modalState: false})
  }

  render(){
    return (
      <div style={root}>
        <AppBar position="static">
          <Toolbar variant="dense" style={{
            backgroundColor: '#FF8C00'
          }}>
            <div style={{height: 60, width: 60, justifyContent: 'center', alignItems:'center', borderRadius:50, backgroundColor:'#2C3539', display:'flex'}}>
              <Link to={this.props.path}>
                <ArrowBackOutlinedIcon style={{fontSize: 50, color: '#FF8C00'}} />
              </Link>
            </div>
            <MediaQuery maxDeviceWidth={1023}>
              <div style={{position:'absolute', right: 10}}>
                <Badge badgeContent={this.props.order} color='primary'>
                  <ShoppingCartIcon style={{fontSize: 40, color: '#2C3539'}} onClick={() => this.setState({modalState:true})}/>
                </Badge>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  style={modal}
                  open={this.state.modalState}
                  onClose={this.closeModal.bind(this)}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 1000,
                  }}
                >
                  <div style={modalContainer}>
                      <Cart />
                  </div>
                </Modal>
              </div>
            </MediaQuery>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}
