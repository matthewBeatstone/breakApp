import React, {Component} from 'react'
import OrderCard from '../components/OrderCard.js'


export default class CashDesk extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount(){
    const eventSource = new EventSource('http://127.0.0.1:5000/cashdesk')
    eventSource.addEventListener('message', data => {
      console.log(JSON.parse(data.data))
      }
    )

  }



  render(){

    return(
      <div>
        <OrderCard title={'ciao'} quantity={2} totCost={50} />
      </div>
    )
  }
}
