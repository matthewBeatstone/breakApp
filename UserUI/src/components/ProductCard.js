import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import ScrollArea from 'react-scrollbar';
import Grid from '@material-ui/core/Grid';
import Beer from './products/Beer.js'
import Sodas from './products/Sodas.js'
import Cocktail from './products/Cocktail.js';
import Zoom from 'react-reveal/Zoom';
import ItemCard from './ItemCard.js';
import ProductCard from './Products.js'
import GridList from '@material-ui/core/GridList';
import {connect} from 'react-redux'
import GridListTile from '@material-ui/core/GridListTile';

const card = {
  maxWidth: 220,
  background:'#FF8C00',
  borderRadius:70
};
const media = {
  height: 140
};

const modal = {
  display: 'flex',
  alignItems:'flex-start',
  justifyContent: 'center',
  borderRadius:50
};

const modalContainer = {
    width: 500,
    height: 300,
    borderRadius: 30
};

const cardContainer = {
  height: 240,
  width: 220,
  background:'#FF8C00',
  borderRadius:50,
  borderColor: '#FF8C00'
};

function mapStateToProps(state){
  return{
    catalog: state.catalog
  }
}

class ProductCategories extends Component {

  constructor(props){
    super(props);
  }



  render(){
    return(
      <div style={{marginTop:10}}>
      <ScrollArea
        speed={2}
        className="area"
        contentClassName="content"
        horizontal={false}
        style={{
          width: 500,
          height: 600
        }}
        >
        <GridList cols={2}>
        {this.props.catalog.map(cat => (
          <div>
            <ProductCard title={cat.title} pic={cat.pic} items={cat.items}  />
          </div>
        ))}
        </GridList>

    </ScrollArea>
    </div>
    )
  }

}
export default connect(mapStateToProps)(ProductCategories)
