import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import Header from '../components/Header.js';
import ProductCategories from '../components/ProductCard.js'
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {connect} from 'react-redux'
import ScrollArea from 'react-scrollbar'
import ShopCard from '../components/ShopCard.js'
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import FlatList from 'flatlist-react'


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



const controls = {
    display: 'flex',
    alignItems: 'center',

  };


class Home extends Component {

    render() {
      return (
        <div>
            <Header />
            <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <ProductCategories />

                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                  {this.props.order.map(item => (
                      <ScrollArea
                        speed={0.8}
                        className="area"
                        contentClassName="content"
                        horizontal={false}
                        style = {{
                          marginLeft: 200,
                          height: 500
                        }}
                        >
                        <div>
                          <ShopCard itemTitle={item.title} quantity={item.quantity} />
                          <h3> {item.quantity} </h3>
                          {console.log(this.props.order)}
                          </div>

                      </ScrollArea>
                      ))}


                   </div>
                </Grid>
                </Grid>
              </div>

        </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
