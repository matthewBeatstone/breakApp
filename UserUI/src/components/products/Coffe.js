import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from '../ItemCard.js';
import Radio from '@material-ui/core/Radio';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';
import UndoIcon from '@material-ui/icons/Undo';



const content = {
    flex: '1 0 auto',
    borderRadius: 30
  };
class CoffeCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      coffeType: {
        corretto: 'corretto',
        decaffeinato: 'decaffeinato',
        orzo: 'orzo',
        americano: 'americano',
        gingseng: 'ginseng',
      },
      title: this.props.itemTitle
    }
  }


  undo(){
    const title = this.state.title.split(" ")
    var newTitle = []
    for (var i = 0; i < title.length-1; i++) {
      newTitle.push(title[i])
    }
    console.log(newTitle)
    this.setState({title: newTitle.join(" ")})
  }


  render(){
    return(
      <div>
      <Card >
        <CardContent>
        <ItemCard  itemTitle={this.state.title} itemCost={this.props.itemCost} itemPic={this.props.itemPic} />
        <div style={{flexDirection:'column'}}>
          <button  onClick={this.undo.bind(this)}>
          <UndoIcon/>
          </button>
          <Radio
            value={this.state.coffeType.corretto}
            onChange={() => this.setState({title: this.state.title + ' corretto'})}
            name="radio-button-demo"
            />
          <Typography component='h7' variant='h6'>
            Corretto
          </Typography>
          <Radio
            value={this.state.coffeType.corretto}
            onChange={() => this.setState({title: this.state.title + ' decaffeinato'})}
            name="radio-button-demo"
            />
          <Typography component='h7' variant='h6'>
            decaffeinato
          </Typography>
        </div>

      </CardContent>
      </Card>
      </div>
    )
  }
}

export default class Coffe extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false
    }


    this.heineken = {
      title: 'Heineken',
      cost: 3.5,
      img: require('../../assets/images/heineken.jpg'),
  }

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
          <CoffeCard  itemTitle={'caffe'} itemCost={100} itemPic={this.heineken.img} />


        </ScrollArea>
    )
  }
}
