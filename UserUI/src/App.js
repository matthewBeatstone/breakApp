import React, { Component } from 'react';
import Home from './screens/Home.js';
import Index from './screens/Index.js';
import Checkout from './components/Checkout.js'
import Receipt from './components/Receipt.js'

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

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
          <Router>
            <Switch>
            <Route path='/home'>
            <Bounce right>
              <Home />
            </Bounce>
            </Route>
            <Route path='/checkout'>
              <Bounce right>
                <Checkout />
              </Bounce>
            </Route>
            <Route path='/receipt'>
              <Bounce right>
                <Receipt />
              </Bounce>
            </Route>
            <Route path='/index'>
              <Zoom right>
              <Index />
              </Zoom>
            </Route>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }

}
