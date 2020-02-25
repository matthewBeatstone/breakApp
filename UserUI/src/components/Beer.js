import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from './ItemCard.js';


export default class Beer extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false
    }


    this.heineken = {
      title: 'Heineken',
      cost: 3.50,
      img: require('../assets/images/heineken.jpg'),
    };

    this.becks = {
      title: 'Becks',
      cost: 3.50,
      img: require('../assets/images/becks.jpg'),
    };

    this.ceres = {
      title : 'Ceres',
      cost: 4.00,
      img: require('../assets/images/ceres.jpg'),
    };


  }

  openModal(){
    this.setState({modalState: true})
  }
  closeModal(){
    this.setState({modalState: false})
  }

  render(){
    return(
        <ScrollArea
          speed={0.8}
          className="area"
          contentClassName="content"
          horizontal={false}
          style={{
            height: 700
          }}
          >
          <ItemCard  itemTitle={this.heineken.title} itemCost={this.heineken.cost} itemPic={this.heineken.img} />
          <ItemCard  itemTitle={this.becks.title} itemCost={this.becks.cost} itemPic={this.becks.img} />
          <ItemCard  itemTitle={this.ceres.title} itemCost={this.ceres.cost} itemPic={this.ceres.img} />



        </ScrollArea>
    )
  }
}
