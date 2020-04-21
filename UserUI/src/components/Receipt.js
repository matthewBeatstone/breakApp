import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Keyboard from './Keyboard.js';
import Bounce from 'react-reveal/Bounce';


function mapStateToProps(state){
  return{
    order: state.order
  }
}

class Receipt extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false,
      tot: '',
      phoneNumber: '',
      SmsBody: '',
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

  onSubmit() {
    var order = '';
    this.props.order.map(item => {
        order = order + ' ' + item.quantity + ' ' + item.title + ' ' + item.totCost + ';  '
    })


    fetch('http://127.0.0.1:8080/api/messages', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        phoneNumber: this.state.phoneNumber,
        smsBody: this.state.SmsBody
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
    console.log(this.state.SmsBody)

  }

  handleKeyboard(key){
    this.setState({phoneNumber: this.state.phoneNumber + key})
  }
  handleCanc(){
    this.setState({phoneNumber: this.state.phoneNumber.substring(0, this.state.phoneNumber.length-1)})
  }


  render(){

    if(!this.props.order.length !== 0){
      return(
        <Bounce right>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div>
            <Typography component='h5' variant='h5' style={{color: 'white', marginTop: 50}}>
              Inserisci il tuo numero e ricevi lo scontrino via sms
            </Typography>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <form noValidate autoComplete="off" style={{backgroundColor: '#FF8C00', borderRadius: 20, width: 400, marginTop:10}}>
                  <TextField
                    id="standard-basic"
                    label="Tel."
                    style={{width:400}}
                    value={this.state.phoneNumber}
                    onChange={(input) => this.setState({phoneNumber: input.target.value})}
                    value={this.state.phoneNumber} />
                </form>
            </div>
              <Button
                style={{width: 200, height: 90, marginLeft: 30, marginTop: 50, background:'#FF8C00', borderRadius:50}}
                variant="contained"
                color="primary"
                label="invia il tuo ordine"
                onClick={this.onSubmit.bind(this)}>
                Invia SMS
              </Button>
          </div>
          <div style={{display:'flex', justifyContent:'center', marginTop: 80}}>
            <Keyboard show={true} handleKey={this.handleKeyboard.bind(this)} canc={this.handleCanc.bind(this)}/>
          </div>

        </Bounce>
      )
    }
    else{
      return null
    }

  }
}

export default connect(mapStateToProps)(Receipt)
