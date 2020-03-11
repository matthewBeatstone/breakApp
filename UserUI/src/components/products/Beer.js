import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from '../ItemCard.js';


export default class Beer extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false
    }


    this.heineken = {
      title: 'Heineken',
      cost: 3.5,
      img: require('../../assets/images/heineken.jpg'),
    };

    this.becks = {
      title: 'Becks',
      cost: 3.5,
      img: require('../../assets/images/becks.jpg'),
    };

    this.ceres = {
      title : 'Ceres',
      cost: 4,
      img: require('../../assets/images/ceres.jpg'),
    };

    this.blondeBeer20 = {
      title : 'Chiara alla spina (20 cl.) ',
      cost: 3.,
      img: require('../../assets/images/spinaChiara.png'),
    };
    this.blondeBeer40 = {
      title : 'Chiara alla spina (40 cl.) ',
      cost: 5,
      img: require('../../assets/images/spinaChiara.png'),
    };
    this.corona = {
      title : 'Corona',
      cost: 4,
      img: require('../../assets/images/corona.png'),
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
          <ItemCard  itemTitle={this.heineken.title} itemCost={this.heineken.cost} itemPic={this.heineken.img} />
          <ItemCard  itemTitle={this.becks.title} itemCost={this.becks.cost} itemPic={this.becks.img} />
          <ItemCard  itemTitle={this.ceres.title} itemCost={this.ceres.cost} itemPic={this.ceres.img} />
          <ItemCard  itemTitle={this.blondeBeer20.title} itemCost={this.blondeBeer20.cost} itemPic={this.blondeBeer20.img} />
          <ItemCard  itemTitle={this.blondeBeer40.title} itemCost={this.blondeBeer40.cost} itemPic={this.blondeBeer40.img} />
          <ItemCard  itemTitle={this.corona.title} itemCost={this.ceres.cost} itemPic={this.corona.img} />

        </ScrollArea>
    )
  }
}
