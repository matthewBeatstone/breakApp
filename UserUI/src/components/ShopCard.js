import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import MediaQuery from 'react-responsive';



import {connect} from 'react-redux';



const details = {
    display: 'flex',
    flexDirection: 'column',
  };

const controls = {
    display: 'flex',
    alignItems: 'center',
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

  componentDidUpdate(prevProps){
    if(this.props.order !== prevProps.order){
      this.setState({
        title: this.props.itemTitle,
        quantity: this.props.quantity,
        cost:this.props.cost,
        itemCost: this.props.itemCost
      })
    }
  }


  add(){

    this.setState({quantity: ++this.state.quantity})
    this.props.update_cart(this.state.title, this.state.quantity, this.state.itemCost*10*this.state.quantity/10)
  }

  remove(){
    if(this.state.quantity > 1){
      this.setState({quantity: --this.state.quantity})
      this.props.update_cart(this.state.title, this.state.quantity, this.state.itemCost*10*this.state.quantity/10)
    }


  }


  render(){
    return (
      <div>
        <MediaQuery minDeviceWidth={1024}>
        <div style={details}>
          <div style={controls}>
              <IconButton
                aria-label="previous"
                onClick={this.remove.bind(this)}>
               <RemoveCircleRoundedIcon style={{fontSize:40}}/>
            </IconButton>
            <IconButton aria-label="next" onClick={this.add.bind(this)} >
              <AddCircleRoundedIcon style={{fontSize:40}}/>
            </IconButton>
            <CancelIcon style={{fontSize:40, marginLeft:20}} onClick={() => this.props.remove_item(this.state.title)}/>
          </div>
        </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1023}>
          <div style={details}>
            <div style={controls}>
                <IconButton
                  aria-label="previous"
                  onClick={this.remove.bind(this)}>
                 <RemoveCircleRoundedIcon style={{fontSize:35}}/>
              </IconButton>
              <IconButton aria-label="next" onClick={this.add.bind(this)} >
                <AddCircleRoundedIcon style={{fontSize:35}}/>
              </IconButton>
              <CancelIcon style={{fontSize:30, marginLeft:20}} onClick={() => this.props.remove_item(this.state.title)}/>
            </div>
          </div>
        </MediaQuery>
    </div>

    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopCard)
