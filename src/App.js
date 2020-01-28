import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Home from './screens/Home.js'
import {Provider} from 'react-redux';
import {createStore} from 'redux'

const init_order = {
  order : [],
}

const reducer = (state = init_order, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return(
        {...state, order: [...state.order, action.item]}
      )
    case 'GET_TOTAL':
          var tot=0
          return (state.order.map(item => {
            tot+=item.cost
          }))


  }
  return state
}


const store = createStore(reducer)

export default class App extends Component {

  render(){
    return (
      <div className="App">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }

}
