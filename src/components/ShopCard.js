import React, {Component} from 'react';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import {connect} from 'react-redux';


const details = {
    display: 'flex',
    flexDirection: 'column',
  };

const content = {
    flex: '1 0 auto',
    background:'#FF8C00',
    marginTop: 20
  };

const controls = {
    display: 'flex',
    alignItems: 'center',
    marginLeft:20
  };




function mapStateToProps(state){
  return {
    order: state.order
  }
}

function mapDispatchToProps(dispatch){
  return {
    update_cart: (title, quantity, cost) =>
            dispatch({type:'UPDATE_CART', title:title, quantity:quantity, cost: cost}),

    remove_item: (title) => dispatch({type: 'REMOVE_ITEM', title:title}),

  }
}



class ShopCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      title:this.props.itemTitle,
      quantity: this.props.quantity,
      cost: this.props.cost,
      itemCost: this.props.itemCost
    }
  }


  add(){
    this.setState({quantity: ++this.state.quantity})
    this.props.update_cart(this.state.title, this.state.quantity, this.state.cost+this.state.itemCost)
  }

  remove(){
    if(this.state.quantity > 0){
      this.setState({quantity: --this.state.quantity})
      this.props.update_cart(this.state.title, this.state.quantity, this.state.cost-this.state.itemCost)
    }

    if (this.state.quantity === 0){
      this.props.remove_item(this.state.title)
    }

  }

  render(){
    return (
      <div>
        <div style={details}>
          <CardContent style={content}>
            <Typography component="h5" variant="h5">
              {this.state.title}
            </Typography>
          </CardContent>
          <div style={controls}>
              <IconButton
                aria-label="previous"
                onClick={this.remove.bind(this)}>
               <RemoveCircleRoundedIcon />
            </IconButton>
            <IconButton aria-label="next" onClick={this.add.bind(this)}>
              <AddCircleRoundedIcon />
            </IconButton>
          </div>
        </div>
    </div>

    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopCard)
