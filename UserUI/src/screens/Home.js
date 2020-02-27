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



const content = {
    flex: '1 0 auto',
    background:'#FF8C00',
    marginTop: 20,
  };

const button = {
  bottom: 0,
  width: 390,
  height: 60,
  marginLeft: 550,
  backgroundColor: '#FF8C00',
}



class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      endpoint: 'http://127.0.0.1:5000',
      tot: '',
      buttonText: 'ORDINA'
    }


  }

  order(){
    fetch('http://127.0.0.1:5000/order', {

        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          order: this.props.order
        }),
      })
  }


  componentDidUpdate(prevProps){
    if(this.props.order !== prevProps.order){
      var t = 0;
      for (var i = 0; i < this.props.order.length; i++) {
        t += this.props.order[i].totCost
      }
      this.setState({tot: t + '€'})
    }
  }


    render() {
      return (
        <div style={{background:'#2C3539'}}>
            <Header />
            <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <ProductCategories />

                </Grid>
                <Grid item xs={12} sm={6}>
                <GridList>
                    <div style={{marginLeft: 600, height: 740}}>
                      <Cart />
                      </div>
                      <div>
                      <Button
                      variant="contained"
                      color="primary"
                      style={button}
                      onClick={this.order.bind(this)}
                      disabled={true}
                      >
                        <Typography style={{color: 'black'}} content={'h6'} variant='h6'> {'ORDINA' + '    ' + this.state.tot}  </Typography>
                      </Button>
                      </div>
                </GridList>
                </Grid>
                </Grid>
              </div>

        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    order: state.order
  }
}

function mapDispatchToProps(dispatch){
  return{
    get_total: () => dispatch({type: 'GET_TOTAL'}),
    update_cart: (title, quantity) =>
            dispatch({type:'UPDATE_CART', title:title}),
    get_quantity: (title) =>
      dispatch({type:'UPDATE_CART', title:title}),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
