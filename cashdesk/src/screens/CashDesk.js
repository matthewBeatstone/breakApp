import React, {Component} from 'react'
import OrderCard from '../components/OrderCard.js'
import {connect} from 'react-redux'
import socketIOClient from "socket.io-client";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

function mapStateToProps(state){
  return{
    cashdesk: state.cashdesk
  }
}

function mapDispatchToProps(dispatch){
  return{
    add_order: (order) => dispatch({type:'ADD_ORDER', order: order})
  }
}

const content = {
    flex: '1 0 auto',
    background:'#FF8C00',
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'column'
  };

class CashDesk extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: '',
      socket: socketIOClient('http://127.0.0.1:8080')
    }

}

  componentDidMount () {
    const socket = this.state.socket
    socket.on('order', (order) => {
      console.log(order)
      this.props.add_order(order)
    })
  }

  render(){
    console.log(this.props.cashdesk)
    return(
      this.props.cashdesk.map(order =>
        <CardContent style={content}>
          {order.map(item =>
            <div key={item.title}>
              <Typography component='h5' variant='h5'>
                {item.quantity + ' '} {item.title}
              </Typography>
                <Typography>
                  {item.totCost} €
                </Typography>
            </div>
          )
        }
        </CardContent>
    ))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CashDesk)
