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
    flexDirection:'row',

  };
const details = {
    display: 'flex',
    flexDirection: 'column',
  };

const content = {
    flex: '1 0 auto',
    borderRadius: 50
  };
const cover = {
    width: 150,
    height: 150,
    borderRadius:100


  };
const controls = {
    display: 'flex',
    alignItems: 'center',

  };

const button = {
  width: 110,
  height: 50,
  backgroundColor: '#FF8C00',
  borderRadius:30
}


class ItemCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      quantity: 1,
      title : this.props.itemTitle,
      itemCost : this.props.itemCost,
    }

  }

  addItem(){
    this.setState({quantity: this.state.quantity+1})
  }
  removeItem(){
    if(this.state.quantity > 1)
      this.setState({quantity: this.state.quantity-1})
  }

  render(){
    return (
      <Card style={card}>
      <div>
      <CardMedia
        style={cover}
        image={this.props.itemPic}
        title="itemPic"
      />
      </div>
        <div style={details}>
          <CardContent style={content}>
            <Typography component="h5" variant="h5">
              {this.props.itemTitle}
            </Typography>
            <Typography component="h5" variant="h5">
              {this.props.itemCost + '€'}
            </Typography>
          </CardContent>
          <div style={controls}>
            <IconButton aria-label="previous" onClick={this.removeItem.bind(this)}>
               <RemoveCircleRoundedIcon style={{fontSize:35}} />
            </IconButton>
            <h2> {this.state.quantity} </h2>
            <IconButton aria-label="next" onClick={this.addItem.bind(this)}>
              <AddCircleRoundedIcon style={{fontSize:35}}/>
            </IconButton>
            <Button
            variant="contained"
            color="primary"
            style={button}
            onClick={() => this.props.add_item({
              title: this.props.itemTitle,
              quantity: this.state.quantity,
              totCost:   ((this.props.itemCost*10)*this.state.quantity)/10,
              itemCost: this.props.itemCost,
              pathPic: this.props.itemPic
            })}>

              Aggiungi
            </Button>
          </div>
        </div>

      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
