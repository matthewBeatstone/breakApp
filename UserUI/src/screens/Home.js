import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header.js';
import ProductCategories from '../components/ProductCard.js'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import Cart from '../components/Cart.js'




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

  openModal(){
    this.setState({modalState: true})
  }
  closeModal(){
    this.setState({modalState: false})
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
        <div style={{background:'#2C3539', width: 1020 ,height: 580 }}>
          <Header path='/index'/>
          <div style={{marginTop:10}}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <ProductCategories />
                </Grid>
                  <Grid item xs={12} sm={6}>
                    <div style={{marginLeft: 40, width:450}}>
                        <Cart />
                      </div>
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
