import React, {Component} from 'react'
import OrderCard from '../components/OrderCard.js'
import {connect} from 'react-redux'


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


class CashDesk extends Component{

  constructor(props){
    super(props);
    this.state = {
      source: new EventSource('http://127.0.0.1:5000/cashdesk'),
      messages: ['ciao']
  }
}

  componentDidMount () {
    const { source, messages } = this.state
    source.addEventListener('order', message => {
        console.log(message.id)
        var m = JSON.parse(message.data)
        console.log(m)
        m.map(item => {
          this.props.add_order(item)
        })
    })
    console.log(this.state.messages)
  }

  render(){

    return(
      <div>
        {this.props.cashdesk.map(item =>
          <OrderCard title={item.title} />
        )}
        {console.log(this.props.chashdesk)}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CashDesk)
