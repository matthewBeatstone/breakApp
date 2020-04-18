import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from '../ItemCard.js';
import Radio from '@material-ui/core/Radio';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';
import UndoIcon from '@material-ui/icons/Undo';
import IconButton from '@material-ui/core/IconButton';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';


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
      coffeFormat: '',
      coffeCost: 1.1,

    }
    this.caffe = {
      title: 'Caffe',
      cost: 1.1,
      img: require('../../assets/images/tazzina.jpeg'),
    }

    this.coffeType = [
      {type: 'decaffeinato', cost: null},
      {type: 'corretto', cost: 0.5},
      {type: 'marocchino', cost: 0.9},
      {type: 'orzo', cost: 0.5},
      {type: 'gingseng', cost: 0.5},
      {type: 'latte', cost: 0.3},
    ]
    this.coffeArray = ['Caffe']

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


  handleCheckBox = (event, cost) => {
    if(event.target.checked)
      this.setState({coffeTitle: this.state.coffeTitle + ' ' + event.target.name})
    else{
      this.setState({coffeTitle: this.state.coffeTitle.substring(0, this.state.coffeTitle.lastIndexOf(" "))})
    }
    if(cost !== null){
      if(event.target.checked){
        this.setState({coffeCost: (this.state.coffeCost*10 + cost*10)/10})
      }
      else{
        this.setState({coffeCost: (this.state.coffeCost*10 - cost*10)/10})
      }
    }
  }

  handleRadio = (event) => {
    switch (event.target.value) {
      case 'tazza grande':
        this.setState({coffeFormat: 'tazza grande', coffeCost: this.state.coffeCost + 0.5})
        break;
      case 'tazza piccola':
        this.setState({coffeFormat: 'tazza piccola', coffeCost: this.state.coffeCost - 0.5})
        break;

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
            height: 600,
            borderRadius:30
          }}
          >
          <div>
          <Card>
            <CardContent>
            <ItemCard  itemTitle={this.state.coffeTitle + ' ' +this.state.coffeFormat} itemCost={this.state.coffeCost} itemPic={this.caffe.img} />
            <div style={{flexDirection:'row', display:'flex'}}>
              <div>
                <FormControl component="fieldset">
                  <FormGroup>
                  <ScrollArea
                    speed={0.8}
                    className="area"
                    contentClassName="content"
                    horizontal={false}
                    style={{
                      height: 200,
                    }}
                    >
                    {this.coffeType.map(coffe => (
                      <div key={coffe.type} >
                      <FormControlLabel
                        control={
                          <Checkbox
                            style={{display:'flex', flexDirection: 'row'}}
                            name={coffe.type}
                            onChange={(event) => this.handleCheckBox(event, coffe.cost)} />
                        }
                        label={coffe.type}
                      />
                      </div>
                    ))}
                    </ScrollArea>
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>
              </div>
              <div style={{marginLeft: 100, marginTop: 40}}>
                <FormControl component="fieldset" >
                  <FormLabel component="legend">Scegli il formato</FormLabel>
                  <RadioGroup aria-label="format" name="formato" value={this.state.coffeFormat} onChange={(event) => this.handleRadio(event) }>
                    <FormControlLabel value="tazza grande" control={<Radio />} label="tazza grande" />
                    <FormControlLabel value="tazza piccola" control={<Radio />} label="tazza piccola" />
                  </RadioGroup>
                  </FormControl>
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
