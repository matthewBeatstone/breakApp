import React, {Component} from 'react'
import OrderCard from '../components/OrderCard.js'
import {connect} from 'react-redux'
import socketIOClient from "socket.io-client";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ScrollArea from 'react-scrollbar'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import OrderActions from '../components/OrderActions.js'




function mapStateToProps(state){
  return{
    cashdesk: state.cashdesk
  }
}

function mapDispatchToProps(dispatch){
  return{
    add_order: (order) => dispatch({type:'ADD_ORDER', order: order}),
    remove_order: (id) => dispatch({type:'REMOVE_ORDER', id: id})
  }
}

const container = {
  backgroundColor: '#FF8C00',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  width: 600,
  borderRadius: 50,
  marginBottom: 10,
  flexDirection: 'row'

}

const content = {
    borderRadius: 50,
    background:'#FF8C00',
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'column',
    borderRadius: 50,
    justifyContent:'center',
    display:'flex',
    flexDirection: 'row'
  };


class CashDesk extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: '',
      socket: socketIOClient('http://127.0.0.1:8080')
    }
    this.getTotal.bind(this)

}

  componentDidMount () {
    const socket = this.state.socket
    socket.on('order', (order) => {
      console.log(order)
      this.props.add_order(order)
    })
    document.body.style.backgroundColor = '#2C3539'

  }

  getTotal(order){
    var tot = 0

    for (var i = 0; i < order.length; i++) {
      tot+=order[i].totCost*10
    }
    return tot/10
  }

  render(){
    console.log(this.props.cashdesk)
    this.props.cashdesk.map(order => console.log(order))
    return(
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
        style={{display:'flex', justifyContent:'center', marginTop: 10, height: '80%'}}
        >
        {this.props.cashdesk.map(order => (
          <div key={order.id} style={container}>
            <div>
              <CardContent style={content}>
                <div>
                  <Typography component='h4' variant='h4'>
                    {'tavolo  ' + order.table}
                  </Typography>
                  {order.order.order.map(item => (
                    <div key={item.title} style={{display:'flex'}}>
                        <Typography component='h6' variant='h6'>
                          {item.quantity + ' '} {item.title}
                        </Typography>
                    </div>
                  ))
                }
                <Typography component='h3' variant='h3'>
                {this.getTotal(order.order.order) + '€'}
                </Typography>
                </div>
                <OrderActions id={order.id} />
              </CardContent>
            </div>
          </div>
      ))
    }

  </ScrollArea>
)
}
}
export default connect(mapStateToProps, mapDispatchToProps)(CashDesk)
