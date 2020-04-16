import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from './ItemCard.js';
import ShopCard from '../components/ShopCard.js'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import EuroIcon from '@material-ui/icons/Euro';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import io from 'socket.io-client'




const content = {
    background:'#2C3539',
    borderRadius: 20,
    marginTop: 20,
    height: 20,
    width: '90%',
    alignItems: 'center',
    marginLeft: 10

  };

const summary = {
  width: 600,
  height: 500,
  flexDirection: 'column',
  display: 'flex',
  backgroundColor: '#FF8C00',
  borderRadius: 50,
}

function mapStateToProps(state){
  return{
    order: state.order
  }
}

class Checkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false,
      tot: '',
      phoneNumber: '',
      body: '',
      submitting: false,
      error: false,
      showKeyboard: true,
      name: ''
    }
    var t = 0;
    for (var i = 0; i < this.props.order.length; i++) {
      t += (this.props.order[i].totCost * 10)
      console.log(t)
    }
    this.state.tot = t/10 + '€'
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    document.body.style.backgroundColor = '#2C3539'
}



  openModal(){
    this.setState({modalState: true})
  }
  closeModal(){
    this.setState({modalState: false})
  }

  send_order = () => {
    const socket = io('http://127.0.0.1:8080');
    socket.emit('orders', this.props.order)
  }

  onSubmit(event) {
    event.preventDefault();
    fetch('http://127.0.0.1:8080/api/messages', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        phoneNumber: this.state.phoneNumber,
        messageBody: this.porp.order,
        name: this.state.name,
        paymentMethod: this.state.payment
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log('sent')
        } else {
          console.log('error')
        }
    });
}



  render(){

    if(!this.props.order.length !== 0){
      return(
        <div style={{height: 900}}>
          <div style={{display:'flex', flexDirection: 'row'}}>
            <div style={{display:'flex', flexDirection:'column'}}>
              <div style={{marginTop:20, marginLeft: 20, alignItems:'center'}}>
                <Typography component='h5' variant='h5' style={{justifyContent: 'center', alignItems:'center', display:'flex', color: 'white'}}>
                  Riepilogo
                  </Typography>
              </div>
              <div style={{marginLeft: 20}}>
                <Card style={summary}>
                  <ScrollArea
                    speed={0.8}
                    className="area"
                    contentClassName="content"
                    horizontal={false}
                    style={{height: 500}}
                    >
                    {this.props.order.map((orderItem) => (
                      <div key={orderItem.title}>
                        <CardContent style={content}>
                        <div>
                          <Typography component='h5' variant='h5' style={{color:'#FF8C00'}}>
                            {orderItem.quantity + ' ' +orderItem.title}
                          </Typography>
                        </div>
                        </CardContent>
                      </div>
                        )
                      )
                    }
                  </ScrollArea>
                </Card>
              <div>
                <Typography  style={{color:'#FF8C00', fontSize: 50}}>
                    {this.state.tot}
                </Typography>
              </div>
            </div>
          </div>
            <div style={{width: '90%', height:500, marginLeft: 300, backgroundColor: '#FF8C00',  marginTop: 50, borderRadius: 50, marginRight:20}}>
              <div style={{display:'flex', justifyContent: 'center'}}>
                <TextField
                  id="standard-basic"
                  label="Nome"
                  style={{width:400}}
                  variant='filled'
                  value={this.state.name}
                  onChange={(text) => this.setState({name: text.target.value})}/>
              </div>
              <div style={{display:'flex', justifyContent:'flex-start', marginLeft: 30, marginTop: 60}}>
              <FormControl component="fieldset">
                <FormLabel component="legend"><Typography> Come vorresti pagare?</Typography></FormLabel>
                <RadioGroup aria-label="payment" name="payment" value={this.state.payment} onChange={(input) => this.setState({payment: input})}>
                  <div style={{display:'flex', flexDirection:'row'}}>
                    <EuroIcon style={{fontSize: 60, marginRight: 30, color: '#2C3539'}} />
                    <FormControlLabel value="cash" control={<Radio style={{color: 'white'}} />} label="Contanti" />
                  </div>
                  <div style={{display:'flex', flexDirection:'row'}}>
                  <CreditCardIcon style={{fontSize:60, marginRight: 30, color:'#2C3539'}} />
                  <FormControlLabel value="card" control={<Radio  style={{color: 'white'}}/>} label="Carte" />
                  </div>
                </RadioGroup>
                </FormControl>
              </div>
              <form style={{width:400, marginLeft: 10, marginTop: 20}} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Tel."
                  style={{width:400, marginTop: 20}}
                  value={this.state.phoneNumber}
                  onChange={(input) => this.setState({phoneNumber: input.target.value})}
                  value={this.state.phoneNumber} />
              </form>
            </div>
            <div style={{width: '90%', height: 'auto', position: 'absolute', bottom:50, justifyContent:'center'}}>
            </div>
            <div style={{position: 'absolute', bottom: 40}}>
              <Button
                style={{width: 1920, height: 90, display:'flex', alignItems: 'center', background:'#FF8C00', borderRadius:50, position:'absolute'}}
                variant="contained"
                color="primary"
                label="invia il tuo ordine"
                onClick={this.onSubmit}>
                Invia il tuo ordine
              </Button>
            </div>
          </div>
        </div>
      )
    }
    else{
      return null
    }

  }
}

export default connect(mapStateToProps)(Checkout)
