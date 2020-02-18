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



const content = {
    flex: '1 0 auto',
    background:'#FF8C00',
    marginTop: 20,
  };



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
                <Grid item xs={12} sm={6}>
                <GridList>
                    <div style={{marginLeft: 600, height: 800}}>
                      <ScrollArea
                        speed={0.8}
                        className="area"
                        contentClassName="content"
                        horizontal={false}
                        style={{
                          height: 865,
                        }}>

                        {this.props.order.map(item => (
                          <div key={item.title}>
                          <CardContent style={content}>
                          <Typography component='h5' variant='h5'>
                            {item.title}
                          </Typography>
                          <ShopCard
                            itemTitle={item.title}
                            quantity={item.quantity}
                            itemCost = {item.itemCost}
                            />
                            <Typography component='h5' variant='h5'>
                            {item.quantity}
                            </Typography>
                            <Typography>
                              {item.totCost}
                            </Typography>
                          {console.log(this.props.order)}
                          </CardContent>
                          </div>
                      ))}

                      </ScrollArea>
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
