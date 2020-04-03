import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header.js';
import ProductCategories from '../components/ProductCard.js'
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import {connect} from 'react-redux'
import ScrollArea from 'react-scrollbar'
import ShopCard from '../components/ShopCard.js'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Cart from '../components/Cart.js'
import io from 'socket.io-client'
import Checkout from '../components/Checkout.js';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import {Link} from 'react-router-dom'




const container = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
  borderRadius:100

};


class Index extends Component {

  constructor(props){
    super(props);
    this.state = {
      tot: '',
      buttonText: 'ORDINA',
      disableButton: false,
      modalState: false
    }
  }
  componentDidMount() {
    document.body.style.backgroundColor = '#2C3539'
}

    render() {
      return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '10%', flexDirection:'column'}}>
          <div>
            <div>
            <div style={{background:'#FF8C00', borderRadius:100, width: 250, height:250, alignItems:'center', display:'flex', justifyContent:'center', marginBottom:10}}>
              <div style={container}>
                <FastfoodIcon style={{fontSize: 170}} />
              </div>
            </div>
            <Link to='/home'>
              <Typography component='h3' variant='h3' style={{color: 'white'}}>
                Ordina
              </Typography>
            </Link>

            </div>

            <div style={{background:'#FF8C00', borderRadius:100, width: 250, height:250, alignItems:'center', display:'flex', justifyContent:'center', marginTop: 100}}>
              <div style={container}>
                <FastfoodIcon style={{fontSize: 170}} />
              </div>
            </div>
          </div>
        </div>

    );
  }
}



export default Index
