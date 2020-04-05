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
import io from 'socket.io-client'




const content = {
    flex: '1 0 auto',
    background:'#FF8C00',
    marginTop: 20,
    borderRadius: 20,
    height: 20,
    witdh: 400
  };

const summary = {
  width: 600,
  heigh: 400,
  flexDirection: 'row',
  display: 'flex'
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
      to: '',
      body: '',
      submitting: false,
      error: false
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
    socket.emit('table2', this.props.order)
  }

  onSubmit(event) {
  event.preventDefault();
  fetch('http://127.0.0.1:8080/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({to: this.state.to, body: 'ciao'})
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

    if(this.props.order.length !== 0){
      return(
        <div>
        <div style={{display:'flex', flexDirection: 'row'}}>
          <div style={{height: 300, marginTop:20}}>
          <Typography component='h5' variant='h5' style={{justifyContent: 'center', alignItems:'center', display:'flex', color: 'white'}}>
            Riepilogo
          </Typography>
          <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{
              height: 400,
              borderRadius:30,
              width: 400
            }}
            >
              {this.props.order.map((orderItem) => (
                <div key={orderItem.title} style={summary}>
                  <div>
                    <CardContent style={content}>
                      <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={{marginRight: 10}}>
                          <Typography component='h5' variant='h5'>
                            {orderItem.quantity + ' ' +orderItem.title}
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
                  )
                )
              }
            </ScrollArea>
            </div>
            <div style={{width: 900, height:600, background:'#FF8C00', marginLeft: 600, marginTop: 70, borderRadius: 50}}>
              <form style={{width:400, marginLeft: 10, marginTop: 20}} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Nickname"  style={{width:400}}/>
                <TextField
                  id="standard-basic"
                  label="Tel."
                  style={{width:400, marginTop: 20}}
                  value={this.state.to}
                  onChange={(tel) => this.setState({to: tel.target.value})}
                  value={this.state.to} />

              </form>
            </div>
          </div>
          <div>
          <Typography  style={{color:'#FF8C00', fontSize: 50}}>
              {this.state.tot}
          </Typography>
          </div>
          <Button
            style={{width: 1000, height: 50, display:'flex', background:'#FF8C00', borderRadius:50}}
            variant="contained"
            color="primary"
            label="invia il tuo ordine"
            onClick={this.onSubmit  }>
            Invia il tuo ordine
          </Button>
          </div>
      )
    }
    else{
      return null
    }

  }
}

export default connect(mapStateToProps)(Checkout)
