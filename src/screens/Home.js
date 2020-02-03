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
import Typography from '@material-ui/core/Typography';



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
                <GridList>

                      <ScrollArea
                        speed={0.8}
                        className="area"
                        contentClassName="content"
                        horizontal={false}
                        style = {{
                          marginLeft: 400,
                          height: 500
                        }}>

                        {this.props.order.map(item => (
                        <div style={{marginLeft: 200}}>
                          <ShopCard
                            itemTitle={item.title}
                            quantity={item.quantity} />
                            <Typography component='h5' variant='h5'>
                            {item.quantity}
                            </Typography>
                          {console.log(this.props.order)}
                          </div>


                      ))}
                      </ScrollArea>
                </GridList>
                </Grid>
              </div>

        </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
