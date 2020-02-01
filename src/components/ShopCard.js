import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';


function mapStateToProps(state){
  return {
    order: state.order
  }
}

function mapDispatchToProps(dispatch){
  return {
    update_cart: (title, quantity) =>
            dispatch({type:'UPDATE_CART', title:title,quantity:quantity}),

  }
}


const card = {
    display: 'flex',
  };
const details = {
    display: 'flex',
    flexDirection: 'column',
  };

const content = {
    flex: '1 0 auto',
  };
const cover = {
    width: 400,
    height: 150,
    marginLeft: 150

  };
const controls = {
    display: 'flex',
    alignItems: 'center',

  };


const button = {
  width: 90,
  height: 30,
  backgroundColor: 'orange',
}




class ShopCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      title:this.props.itemTitle,
      quantity: this.props.quantity
    }
    console.log(this.state.title)

  }


  add(){
    console.log(this.state.title)
    this.setState({quantity: ++this.state.quantity})
    console.log(this.state.quantity)
    this.props.update_cart(this.state.title, this.state.quantity)
  }

  remove(){
    if(this.state.quantity > 0){
      this.setState({quantity: --this.state.quantity})
      console.log(this.state.quantity)
      this.props.update_cart(this.state.title, this.state.quantity)

    }

  }



  render(){
    return (
      <div>
        <Card style={card}>
          <div style={details}>
            <CardContent style={content}>
              <Typography component="h5" variant="h5">
                {this.state.title}
              </Typography>
            </CardContent>
            <div style={controls}>
              <IconButton aria-label="previous" onClick={this.remove.bind(this)}>
                 <RemoveCircleRoundedIcon />
              </IconButton>
              <Typography component='h5' variant='h5'>
              </Typography>
              <IconButton aria-label="next" onClick={this.add.bind(this)}>
                <AddCircleRoundedIcon />
              </IconButton>

            </div>
          </div>
        </Card>
      </div>

    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopCard)
