import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header.js';
import ProductCategories from '../components/ProductCard.js'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import Cart from '../components/Cart.js';
import MediaQuery from 'react-responsive';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

function mapStateToProps(state){
  return{
    order: state.order
  }
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


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      tot: '',
      buttonText: 'ORDINA',
      disableButton: false,
      modalState: false
    }


  }



  componentDidUpdate(prevProps){
    if(this.props.order !== prevProps.order){
      var t = 0;
      for (var i = 0; i < this.props.order.length; i++) {
        t += (this.props.order[i].totCost * 10)
        console.log(t)
      }
      this.setState({tot: t/10 + '€'})
      if(this.props.order.length > 0){
        this.setState({disableButton: true})
      }
    }
  }




    render() {
      return (
        <div>
        <Header path='/index' order={this.props.order.length}/>
        <MediaQuery minDeviceWidth={1024}>
        <div style={{background:'#2C3539', width: 1020 ,height: 580 }}>
          <div style={{marginTop:10}}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <ProductCategories cols={3} />
                </Grid>
                  <Grid item xs={12} sm={6}>
                    <div style={{marginLeft: 40, width:450}}>
                        <Cart />
                      </div>
                   </Grid>
                </Grid>
              </div>
            </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1000}>
              <div style={{background:'#2C3539'}}>
                <div style={{marginTop:30, marginLeft: '23%', display:'flex', justifyContent:'center'}}>
                  <ProductCategories cols={1} height={'98%'} />
                </div>
            </div>
            </MediaQuery>
          </div>


    );
  }
}



export default connect(mapStateToProps)(Home)
