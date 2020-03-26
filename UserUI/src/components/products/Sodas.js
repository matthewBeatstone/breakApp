import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from '../ItemCard.js';


export default class Sodas extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false
    }


    this.coca = {
      title: 'Coca Cola',
      cost: 3.5,
      img: require('../../assets/images/coca.png'),
    };

    this.sprite = {
      title: 'Sprite',
      cost: 3,
      img: require('../../assets/images/sprite.jpeg'),
    };

    this.oransoda = {
      title : 'OranSoda',
      cost: 3,
      img: require('../../assets/images/oransoda.png'),
    };

    this.lemonsoda = {
      title : 'LemonSoda',
      cost: 3,
      img: require('../../assets/images/lemonsoda.png'),
    };
    this.chinotto = {
      title : 'Chinotto',
      cost: 3,
      img: require('../../assets/images/chinotto.png'),
    };
    this.fuzeTeaPesca = {
      title : 'FuzeTea Pesca',
      cost: 3,
      img: require('../../assets/images/fuzeteaPesca.jpg'),
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
          <ItemCard  itemTitle={this.coca.title} itemCost={this.coca.cost} itemPic={this.coca.img} />
          <ItemCard  itemTitle={this.sprite.title} itemCost={this.sprite.cost} itemPic={this.sprite.img} />
          <ItemCard  itemTitle={this.oransoda.title} itemCost={this.oransoda.cost} itemPic={this.oransoda.img} />
          <ItemCard  itemTitle={this.lemonsoda.title} itemCost={this.lemonsoda.cost} itemPic={this.lemonsoda.img} />
          <ItemCard  itemTitle={this.fuzeTeaPesca.title} itemCost={this.fuzeTeaPesca.cost} itemPic={this.fuzeTeaPesca.img} />

        </ScrollArea>
    )
  }
}
