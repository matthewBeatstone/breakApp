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


function mapStateToProps(state){
  return{
    order: state.order
  }
}

function mapDispatchToProps(dispatch){
  return{
    get_total: () => dispatch({type: 'GET_TOTAL'})
  }
}






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
                    <GridList>
                      {this.props.order.map(item => (
                          <ScrollArea
                            speed={0.8}
                            className="area"
                            contentClassName="content"
                            horizontal={false}
                            style = {{
                              marginLeft: 700,
                              height: 500
                            }}
                            >
                              <h3> {item.quantity} {item.title} </h3>
                              <h3> {item.cost} € </h3>

                          </ScrollArea>
                      ))}
                    </GridList>
                   </div>
                </Grid>
                </Grid>
              </div>
        </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
