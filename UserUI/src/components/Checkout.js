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
import {withRouter, Link} from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Header from './Header.js'



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
  height: 400,
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
    socket.emit('orders', {
      name: this.state.name,
      order: this.props.order,
      paymentMethod: this.state.payment,
      location: 1
    })
  }


  render(){

    if(!this.props.order.length !== 0){
      return(
        <Bounce right>
        <Header path='/home'/>
        <div style={{height: '100%'}}>
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
                    style={{height: 400}}
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
            <div style={{width: '90%', height:400, marginLeft: 40, backgroundColor: '#FF8C00',  marginTop: 50, borderRadius: 50, marginRight:20}}>
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
            </div>
            <div style={{width: '90%', height: 'auto', position: 'absolute', bottom:50, justifyContent:'center'}}>
            </div>
            <div style={{position: 'absolute', bottom: 5, right: 30}}>
            <Link to='/receipt'>
              <Button
                style={{width: 310, height: 60, background:'#FF8C00', borderRadius:50}}
                variant="contained"
                color="primary"
                label="invia il tuo ordine"
                onClick={this.send_order}>
                  <Typography component='h5' variant='h5' style={{color: 'white'}}>
                    Ordina
                  </Typography>
              </Button>
            </Link>
            </div>
          </div>
        </div>
        </Bounce>
      )
    }
    else{
      return null
    }

  }
}

export default withRouter(connect(mapStateToProps)(Checkout))
