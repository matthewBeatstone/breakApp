import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from './ItemCard.js';
import ShopCard from '../components/ShopCard.js'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {connect} from 'react-redux'

const content = {
    flex: '1 0 auto',
    background:'#FF8C00',
    marginTop: 20,
    borderRadius: 20
  };

const summary = {
  width: 400,
  heigh: 400
}


function mapStateToProps(state){
  return{
    order: state.order
  }
}

class Checkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false
    }
  }

  openModal(){
    this.setState({modalState: true})
  }
  closeModal(){
    this.setState({modalState: false})
  }

  render(){

    if(this.props.order.length !== 0){
      return(
          <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{
              height: 400,
              borderRadius:30
            }}
            >
            {this.props.order.map((orderItem) => (

              <div key={orderItem.title} style={summary}>
              <CardContent style={content}>
              <Typography component='h5' variant='h5'>
                {orderItem.quantity + ' ' +orderItem.title}
              </Typography>
              <div style={{marginLeft: 70}} >
              <ShopCard
                itemTitle={orderItem.title}
                quantity={orderItem.quantity}
                itemCost = {orderItem.itemCost}
                />
              </div>
              {console.log(this.props.order)}
              </CardContent>
              </div>
                )
              )
            }


          </ScrollArea>
      )
    }
    else{
      return null
    }

  }
}

export default connect(mapStateToProps)(Checkout)
