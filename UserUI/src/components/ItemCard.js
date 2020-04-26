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
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';






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
    width:'100%'

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


class ItemCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      quantity: 1,
      title : this.props.itemTitle,
      itemCost : this.props.itemCost,
      options: this.props.options,
      pic: `data:image/png;base64,${this.props.itemPic}`,
      format: '',
      snackbar:false
    }
  }

  addItem(){
    this.setState({quantity: this.state.quantity+1})
  }
  removeItem(){
    if(this.state.quantity > 1)
      this.setState({quantity: this.state.quantity-1})
  }

  addItemToCart(){
    this.props.add_item({
      title: this.state.title,
      quantity: this.state.quantity,
      totCost:   ((this.state.itemCost*10)*this.state.quantity)/10,
      itemCost: this.state.itemCost,
      itemPic: this.state.pic
    })
    this.setState({snackbar: true})
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

  handleRadio(event){
    this.setState({format: event.target.value})
  }

  render(){
    return (
      <div>
      <Card style={card}>
      <div>
        <CardMedia
          style={cover}
          image={this.state.pic}
          title="itemPic"
        />
      </div>
      <div>
        <div style={details}>
          <CardContent style={content}>
            <Typography component="h5" variant="h5">
              {this.state.title + ' ' + this.state.format}
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
            <CheckCircleIcon
            style={{fontSize: 45, color: '#FF8C00'}}
            onClick={this.addItemToCart.bind(this)}>

              Aggiungi
            </CheckCircleIcon>
          </div>
        </div>
        </div>
      </Card>
      <OptionsCard
        options={this.props.options}
        formats={this.props.formats}
        handleCheckBox={this.handleCheckBox.bind(this)}
        handleRadio={this.handleRadio.bind(this)}
        />
      <div style={{position:'absolute', bottom: 3}}>
        <Snackbar open={this.state.snackbar} autoHideDuration={2000} style={{width: 500}}>
          <MuiAlert elevation={6} variant="filled">
            Aggiunto al Carrello!
          </MuiAlert>
        </Snackbar>

      </div>
      </div>


    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
