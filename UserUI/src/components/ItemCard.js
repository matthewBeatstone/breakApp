 import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import OptionsCard from './OptionsCard.js'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import ScrollArea from 'react-scrollbar'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';




function mapStateToProps(state){
  return {
    order: state.order
  }
}

function mapDispatchToProps(dispatch){
  return {
    add_item: (item) => dispatch({
      type:'ADD_ITEM', item: item
    })
  }
}


const card = {
    display: 'flex',
    flexDirection:'row',

  };
const details = {
    display: 'flex',
    flexDirection: 'column',
  };

const content = {
    flex: '1 0 auto',
    borderRadius: 50
  };
const cover = {
    width: 150,
    height: 150,
    borderRadius:100


  };
const controls = {
    display: 'flex',
    alignItems: 'center',

  };

const button = {
  width: 110,
  height: 50,
  backgroundColor: '#FF8C00',
  borderRadius:30
}
const modal = {
  display: 'flex',
  alignItems:'flex-start',
  justifyContent: 'center',
  borderRadius:50
};

const modalContainer = {
    width: 500,
    height: 300,
    borderRadius: 30
};



class ItemCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      quantity: 1,
      title : this.props.itemTitle,
      itemCost : this.props.itemCost,
      options: this.props.options,
      pic: `data:image/png;base64,${this.props.itemPic}`
    }
  }

  addItem(){
    this.setState({quantity: this.state.quantity+1})
  }
  removeItem(){
    if(this.state.quantity > 1)
      this.setState({quantity: this.state.quantity-1})
  }

  handleCheckBox(event, cost){
    if(event.target.checked)
      this.setState({title: this.state.title + ' ' + event.target.name})
    else{
      this.setState({title: this.state.title.substring(0, this.state.title.lastIndexOf(" "))})
    }
    if(cost !== null){
      if(event.target.checked){
        this.setState({itemCost: (this.state.itemCost*10 + cost*10)/10})
      }
      else{
        this.setState({itemCost: (this.state.itemCost*10 - cost*10)/10})
      }
    }
    console.log(event.target.name)
  }

  handleRadio = (event) => {
    this.setState({coffeFormat: event.target.value})

  }

  render(){
    return (
      <Card style={card}>
      <div>
      <CardMedia
        style={cover}
        image={this.state.pic}
        title="itemPic"
      />
      </div>
        <div style={details}>
          <CardContent style={content}>
            <Typography component="h5" variant="h5">
              {this.state.title}
            </Typography>
            <Typography component="h5" variant="h5">
              {this.state.itemCost + '€'}
            </Typography>
          </CardContent>
          <div style={controls}>
            <IconButton aria-label="previous" onClick={this.removeItem.bind(this)}>
               <RemoveCircleRoundedIcon style={{fontSize:35}} />
            </IconButton>
            <h2> {this.state.quantity} </h2>
            <IconButton aria-label="next" onClick={this.addItem.bind(this)}>
              <AddCircleRoundedIcon style={{fontSize:35}}/>
            </IconButton>
            <Button
            variant="contained"
            color="primary"
            style={button}
            onClick={() => this.props.add_item({
              title: this.state.title,
              quantity: this.state.quantity,
              totCost:   ((this.state.itemCost*10)*this.state.quantity)/10,
              itemCost: this.state.itemCost,
              itemPic: this.state.pic
            })}>

              Aggiungi
            </Button>
          </div>
            <div style={{flexDirection:'row', display:'flex', justifyContent:'flex-start'}}>
              <div>
                  <OptionsCard options={this.props.options} handleCheckBox={this.handleCheckBox.bind(this)}/>
              </div>
          </div>
        </div>

      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
