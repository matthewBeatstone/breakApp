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
      pathPic: '../assets/images/heineken.jpg'
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
      pathPic: '../assets/images/ceres.jpg'
    };

    this.blondeBeer20 = {
      title : 'Chiara alla spina (20 cl.) ',
      cost: 3,
      img: require('../../assets/images/spinaChiara.png'),
      pathPic: '../assets/images/spinaChiara.jpg'
    };
    this.blondeBeer40 = {
      title : 'Chiara alla spina (40 cl.) ',
      cost: 5,
      img: require('../../assets/images/spinaChiara.png'),
      pathPic: '../assets/images/spinaChiara.jpg'

    };
    this.corona = {
      title : 'Corona',
      cost: 4,
      img: require('../../assets/images/corona.png'),
      pathPic: '../assets/images/corona.png'

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
          speed={1.5}
          className="area"
          contentClassName="content"
          horizontal={false}
          style={{
            height: 600,
            borderRadius:30
          }}
          >
          <ItemCard  itemTitle={this.heineken.title} itemCost={this.heineken.cost} itemPic={this.heineken.img} pathPic={this.heineken.pathPic}/>
          <ItemCard  itemTitle={this.becks.title} itemCost={this.becks.cost} itemPic={this.becks.img} pathPic={this.becks.pathPic} />
          <ItemCard  itemTitle={this.ceres.title} itemCost={this.ceres.cost} itemPic={this.ceres.img} pathPic={this.ceres.pathPic}/>
          <ItemCard  itemTitle={this.blondeBeer20.title} itemCost={this.blondeBeer20.cost} itemPic={this.blondeBeer20.img} pathPic={this.blondeBeer20.pathPic} />
          <ItemCard  itemTitle={this.blondeBeer40.title} itemCost={this.blondeBeer40.cost} itemPic={this.blondeBeer40.img} pathPic={this.blondeBeer40.pathPic}/>
          <ItemCard  itemTitle={this.corona.title} itemCost={this.ceres.cost} itemPic={this.corona.img}  pathPic={this.corona.pathPic}/>

        </ScrollArea>
    )
  }
}
