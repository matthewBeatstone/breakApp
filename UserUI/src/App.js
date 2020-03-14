import React, { Component } from 'react';
import Home from './screens/Home.js'
import {Provider} from 'react-redux';
import {createStore} from 'redux'

const init_order = {
  order : [],  //initial order stack
}

const reducer = (state = init_order, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      var exist = false
      state.order.map(item =>{
        if(item.title.localeCompare(action.item.title) === 0)
          exist = true
      })

      if(exist){
        return {
          ...state,
          order: state.order.map(item =>
            item.title.localeCompare(action.item.title) === 0 ?
            {...item,
              quantity: item.quantity + action.item.quantity,
              totCost: item.totCost+action.item.totCost,
            }:
            item
          )
        }
      }
      else{
        return {...state, order: [...state.order, action.item]}
      }



    case 'UPDATE_CART':
      console.log(action.cost)
      return {
        ...state,
        order: state.order.map(item =>
          item.title.localeCompare(action.title) === 0 ?
          {...item, quantity: action.quantity, totCost: action.cost}:
          item
        )
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        order: state.order.filter(item =>
          item.title.localeCompare(action.title) !==0
        )
      }

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
