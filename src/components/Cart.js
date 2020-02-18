import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ScrollArea from 'react-scrollbar'
import ShopCard from './ShopCard.js';
import {connect} from 'react-redux'

function mapStateToProps(state){
  return({
    catalog: state.catalog,
    order: state.order
  })
}


class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false,
    }
    console.log(this.props.order)
  }



  render(){
    return(
        <ScrollArea
          speed={0.8}
          className="area"
          contentClassName="content"
          horizontal={false}

          >
            {this.props.order.map(item =>{
              <div key={item.title}>
                  <ShopCard style={{maxWidth: 350}}itemTitle={item.title} />
              </div>
            }

            )}


        </ScrollArea>
    )
  }
}

export default connect(mapStateToProps)(Cart)
