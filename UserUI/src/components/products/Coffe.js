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


export default class Coffe extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false,
      coffeTitle: 'Caffe ',
      coffeCost: 0
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
    this.coffeTitle = this.caffe.title
    this.state.coffeCost = this.caffe.cost
  }


  addCoffeType(type){
    switch (type) {
      case 'corretto':
          this.setState({coffeTitle: this.state.coffeTitle + ' corretto', coffeCost: this.state.coffeCost+0.5})
        break;
      case 'decaffeinato':
        this.setState({coffeTitle: this.state.coffeTitle + ' decaffeinato'})
        break;
      case 'marocchino':
        this.setState({coffeTitle: this.state.coffeTitle + ' marocchino', coffeCost: this.state.coffeCost+0.9})
        break;
      case 'orzo':
        this.setState({coffeTitle: this.state.coffeTitle + ' orzo', coffeCost: this.state.coffeCost+0.5})
        break;
      case 'gingseng':
        this.setState({coffeTitle: this.state.coffeTitle + ' gingseng', coffeCost: this.state.coffeCost+0.5})
        break;
      case 'americano':
        this.setState({coffeTitle: this.state.coffeTitle + ' americano'})
        break;
      case 'latte':
        this.setState({coffeTitle: this.state.coffeTitle + ' latte', coffeCost: (this.state.coffeCost*10+0.3*10)/10})
        break;
    }
  }

  undo(){
    if(this.state.coffeTitle.localeCompare(this.caffe.title) !== 0){
      const title = this.state.coffeTitle.split(" ")
      var newTitle = []
      var newCost = 0
      for (var i = 0; i < title.length-1; i++) {
        if(title[i].localeCompare("") !== 0)
          newTitle.push(title[i])
      }
      console.log(newTitle.length)
      if(newTitle.length > 1){
        this.state.coffeCost = this.caffe.cost
        for (var i = 0; i < newTitle.length; i++) {
          console.log(newTitle[i])
          switch (newTitle[i]) {
            case 'corretto':
                this.setState({coffeCost: this.state.coffeCost+0.5})
                break;
            case 'marocchino':
              this.setState({coffeCost: this.state.coffeCost+0.9})
              break;
            case 'orzo':
              this.setState({coffeCost: this.state.coffeCost+0.5})
              break;
            case 'gingseng':
              this.setState({coffeCost: this.state.coffeCost+0.5})
              break;
            case 'latte':
              this.setState({coffeCost: (this.state.coffeCost*10+0.3*10)/10})
              break;
          }
        }
      }
      else{
        this.setState({coffeCost: this.caffe.cost})
      }
      console.log(newTitle)
      this.setState({coffeTitle: newTitle.join(" ")})
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
          <div>
          <Card >
            <CardContent>
            <ItemCard  itemTitle={this.state.coffeTitle} itemCost={this.state.coffeCost} itemPic={this.caffe.img} />
            <IconButton onClick={this.undo.bind(this)}>
            <UndoIcon/>
            </IconButton>
            <div style={{flexDirection:'column'}}>
              <Radio
                onChange={this.addCoffeType.bind(this, 'corretto')}
                name="radio-button-demo"
                color='default'
                />
              <Typography component='h7' variant='h6'>
                Corretto
              </Typography>
              <Radio
                onChange={this.addCoffeType.bind(this, 'decaffeinato')}
                name="radio-button-demo"
                color='default'
                />
              <Typography component='h7' variant='h6'>
                Decaffeinato
              </Typography>
              <Radio
                onChange={this.addCoffeType.bind(this, 'marocchino')}
                name="radio-button-demo"
                color='default'
                />
              <Typography component='h7' variant='h6'>
                Marocchino
              </Typography>
              <Radio
                onChange={this.addCoffeType.bind(this, 'orzo')}
                name="radio-button-demo"
                color='default'
                />
              <Typography component='h7' variant='h6'>
                Orzo
              </Typography>

              <div style={{alignItems:'center'}}>
              <Radio
                onChange={this.addCoffeType.bind(this, 'gingseng')}
                name="radio-button-demo"
                color='default'
                />
              <Typography component='h7' variant='h6'>
                Gingseng
              </Typography>
              <Radio
                onChange={this.addCoffeType.bind(this, 'americano')}
                name="radio-button-demo"
                style={{marginLeft: 21}}
                color='default'
                />
              <Typography component='h7' variant='h6'>
                Americano
              </Typography>
              <Radio
                onChange={this.addCoffeType.bind(this, 'latte')}
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

          <ItemCard itemTitle={this.cappuccino.title} itemCost={this.cappuccino.cost} itemPic={this.cappuccino.img} />
          <ItemCard itemTitle={this.cioccolata.title} itemCost={this.cioccolata.cost} itemPic={this.cioccolata.img} />



        </ScrollArea>
    )
  }
}
