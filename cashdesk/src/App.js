import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderCard from './components/OrderCard.js'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import CashDesk from './screens/CashDesk.js'

const initCashdesk ={
  cashdesk : []
}

const reducer = (state = initCashdesk, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
        return {
          ...state,
          cashdesk: [action.order, ...state.cashdesk]
        }

    case 'REMOVE_ITEM':
      return {
        ...state,
        cashdesk: state.cashdesk.filter(order =>
          order.id.localeCompare(action.id) !==0
        )
      }

  }
  return state
}


const store = createStore(reducer)





class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <CashDesk />
      </Provider>
    );
  }
}

export default App;
