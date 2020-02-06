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
    add_item: (item) => dispatch({
      type:'ADD_ITEM', item: item
    })
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
  backgroundColor: '#FF8C00',
}


class ItemCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      quantity: 0,
      title : this.props.itemTitle,
      itemCost : this.props.itemCost,
    }

  }

  addItem(){
    this.setState({quantity: this.state.quantity+1})
  }
  removeItem(){
    if(this.state.quantity > 0)
      this.setState({quantity: this.state.quantity-1})



  }

  render(){
    return (
      <Card style={card}>
        <div style={details}>
          <CardContent style={content}>
            <Typography component="h5" variant="h5">
              {this.props.itemTitle}
            </Typography>
            <Typography component="h5" variant="h5">
              {this.props.itemCost}
            </Typography>
          </CardContent>
          <div style={controls}>
            <IconButton aria-label="previous" onClick={this.removeItem.bind(this)}>
               <RemoveCircleRoundedIcon />
            </IconButton>
            <h3> {this.state.quantity} </h3>
            <IconButton aria-label="next" onClick={this.addItem.bind(this)}>
              <AddCircleRoundedIcon />
            </IconButton>
            <Button
            variant="contained"
            color="primary"
            style={button}
            onClick={() => this.props.add_item({
              title: this.state.title,
              quantity: this.state.quantity,
              totCost: this.state.itemCost*this.state.quantity,
              itemCost: this.state.itemCost
            })}>

              Aggiungi
            </Button>
          </div>
        </div>

        <CardMedia
          style={cover}
          image={this.props.itemPic}
          title="itemPic"
        />
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
