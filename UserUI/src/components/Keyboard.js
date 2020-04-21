import React, {Component} from 'react'
import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/lib/Keyboard.css'; // if you just want css
import 'react-touch-screen-keyboard/lib/Keyboard.scss'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const button = {
  width: 80,
  height: 80,
  color: 'white',
}
const cancButton = {
  width: 80,
  height: 80,
  backgroundColor:'#FF8C00',
}


export default class Keyboard extends Component {

  render(){
    if(this.props.show){
      return(
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row'}}>
            <Button style={button} variant="contained" onClick={()=>this.props.handleKey('1')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            1
            </Typography>
            </Button>
            <Button style={button} variant="contained"  onClick={()=>this.props.handleKey('2')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            2
            </Typography>
            </Button>
            <Button style={button} variant="contained"  onClick={()=>this.props.handleKey('3')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            3
            </Typography>
            </Button>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <Button style={button} variant="contained"  onClick={()=>this.props.handleKey('4')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            4
            </Typography>
            </Button>
            <Button style={button} variant="contained"  onClick={()=>this.props.handleKey('5')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            5
            </Typography>
            </Button>
            <Button style={button} variant="contained" onClick={()=>this.props.handleKey('6')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            6
            </Typography>
            </Button>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <Button style={button} variant="contained" onClick={()=>this.props.handleKey('7')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            7
            </Typography>
            </Button>
            <Button style={button} variant="contained"  onClick={()=>this.props.handleKey('8')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            8
            </Typography>
            </Button>
            <Button style={button} variant="contained" onClick={()=>this.props.handleKey('9')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            9
            </Typography>
            </Button>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
            <Button style={cancButton} variant="contained"  onClick={()=>this.props.canc()}>
              <Typography component='h6' variant='h6' style={{color:'black'}}>
              canc
              </Typography>
            </Button>
            <Button style={button} variant="contained"  onClick={()=>this.props.handleKey('0')}>
            <Typography component='h6' variant='h6' style={{color:'black'}}>
            0
            </Typography>
            </Button>
          </div>
        </div>

      )
    }

  else {
    return null
  }
  }
}
