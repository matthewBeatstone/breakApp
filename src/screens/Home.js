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






class Home extends Component {

    render() {
      return (
        <div style={{background:'#2C3539'}}>
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
                        style={{
                          marginLeft: 820,
                          height: 865,
                        }}>

                        {this.props.order.map(item => (
                        <div>
                          <ShopCard
                            itemTitle={item.title}
                            quantity={item.quantity}
                            cost = {item.totCost}
                            itemCost = {item.itemCost}
                            />
                            <Typography component='h5' variant='h5'>
                            {item.quantity}
                            </Typography>
                          {console.log(this.props.order)}
                          </div>
                      ))}

                      </ScrollArea>
                      <Typography component='h5' variant='h5'>
                        {this.props.get_total()}
                      </Typography>
                </GridList>
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
