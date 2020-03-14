import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from '../ItemCard.js';
import Radio from '@material-ui/core/Radio';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';
import UndoIcon from '@material-ui/icons/Undo';
import IconButton from '@material-ui/core/IconButton';


const content = {
    flex: '1 0 auto',
    borderRadius: 30
  };


class CoffeCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.itemTitle
    }
  }

  openModal(){
    this.setState({modalState: true})
  }
  closeModal(){
    this.setState({modalState: false})
  }

  undo(){
    if(this.state.title.localeCompare(this.props.itemTitle) !== 0){
      const title = this.state.title.split(" ")
      var newTitle = []
      for (var i = 0; i < title.length-1; i++) {
        newTitle.push(title[i])
      }
      console.log(newTitle)
      this.setState({title: newTitle.join(" ")})
    }

  }


  render(){
    return(
      <div>
      <Card >
        <CardContent>
        <ItemCard  itemTitle={this.state.title} itemCost={this.props.itemCost} itemPic={this.props.itemPic} />
        <IconButton onClick={this.undo.bind(this)}>
        <UndoIcon/>
        </IconButton>
        <div style={{flexDirection:'column'}}>
          <Radio
            onChange={() => this.setState({title: this.state.title + ' corretto'})}
            name="radio-button-demo"
            color='default'
            />
          <Typography component='h7' variant='h6'>
            Corretto
          </Typography>
          <Radio
            onChange={() => this.setState({title: this.state.title + ' decaffeinato'})}
            name="radio-button-demo"
            color='default'
            />
          <Typography component='h7' variant='h6'>
            Decaffeinato
          </Typography>
          <Radio
            onChange={() => this.setState({title: this.state.title + ' marocchino'})}
            name="radio-button-demo"
            color='default'
            />
          <Typography component='h7' variant='h6'>
            Marocchino
          </Typography>
          <Radio
            onChange={() => this.setState({title: this.state.title + ' orzo'})}
            name="radio-button-demo"
            color='default'
            />
          <Typography component='h7' variant='h6'>
            Orzo
          </Typography>

          <div style={{alignItems:'center'}}>
          <Radio
            onChange={() => this.setState({title: this.state.title + ' gingseng'})}
            name="radio-button-demo"
            color='default'
            />
          <Typography component='h7' variant='h6'>
            Gingseng
          </Typography>
          <Radio
            onChange={() => this.setState({title: this.state.title + ' americano'})}
            name="radio-button-demo"
            style={{marginLeft: 21}}
            color='default'
            />
          <Typography component='h7' variant='h6'>
            Americano
          </Typography>
          <Radio
            onChange={() => this.setState({title: this.state.title + 'shakerato'})}
            name="radio-button-demo"
            style={{marginLeft: 21}}
            color='default'
            />
          <Typography component='h7' variant='h6'>
            Shackerato
          </Typography>
          <Radio
            onChange={() => this.setState({title: this.state.title + 'latte'})}
            name="radio-button-demo"
            style={{marginLeft: 21}}
            color='default'
            />
          <Typography component='h7' variant='h6'>
            Latte
          </Typography>
          </div>
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


    this.caffe = {
      title: 'Caffe',
      cost: 1.1,
      img: require('../../assets/images/tazzina.jpeg'),
  }
    this.cappuccino = {
      title: 'Cappuccino',
      cost: 1.6,
      img: require('../../assets/images/cappuccino.jpg')
    }

    this.cioccolata = {
      title: 'Cioccolata',
      cost: 3.5,
      img: require('../../assets/images/cioccolata.jpg')
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
          <CoffeCard  itemTitle={this.caffe.title} itemCost={this.caffe.cost} itemPic={this.caffe.img} />
          <ItemCard itemTitle={this.cappuccino.title} itemCost={this.cappuccino.cost} itemPic={this.cappuccino.img} />
          <ItemCard itemTitle={this.cioccolata.title} itemCost={this.cioccolata.cost} itemPic={this.cioccolata.img} />



        </ScrollArea>
    )
  }
}
