import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from '../ItemCard.js';


export default class Cocktail extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false
    }


    this.crodino = {
      title: 'Crodino',
      cost: 3,
      img: require('../../assets/images/crodino.jpg'),
    };

    this.sanBitter = {
      title: 'San Bitter',
      cost: 3,
      img: require('../../assets/images/sanBitter.jpg'),
    };

    this.spritz = {
      title : 'Aperol Spritz',
      cost: 5,
      img: require('../../assets/images/spritz.jpeg'),
    };

    this.hugo = {
      title : 'Hugo',
      cost: 5,
      img: require('../../assets/images/hugo.jpeg'),
    };
    this.aperlSoda= {
      title : 'Aperol Soda',
      cost: 3.5,
      img: require('../../assets/images/aperolSoda.jpeg'),
    };
    this.campariSoda= {
      title : 'Campari Soda',
      cost: 3.5,
      img: require('../../assets/images/campariSoda.jpeg'),
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
            height: 700,
            borderRadius:30
          }}
          >
          <ItemCard  itemTitle={this.crodino.title} itemCost={this.crodino.cost} itemPic={this.crodino.img} />
          <ItemCard  itemTitle={this.sanBitter.title} itemCost={this.sanBitter.cost} itemPic={this.sanBitter.img} />
          <ItemCard  itemTitle={this.spritz.title} itemCost={this.spritz.cost} itemPic={this.spritz.img} />
          <ItemCard  itemTitle={this.hugo.title} itemCost={this.hugo.cost} itemPic={this.hugo.img} />
          <ItemCard  itemTitle={this.campariSoda.title} itemCost={this.campariSoda.cost} itemPic={this.campariSoda.img} />

        </ScrollArea>
    )
  }
}
