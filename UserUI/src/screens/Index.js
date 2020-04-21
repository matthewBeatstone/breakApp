import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import {Link} from 'react-router-dom'




const container = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
  borderRadius:100

};


class Index extends Component {

  constructor(props){
    super(props);
    this.state = {
      tot: '',
      buttonText: 'ORDINA',
      disableButton: false,
      modalState: false
    }
  }
  componentDidMount() {
    document.body.style.backgroundColor = '#2C3539'
}

    render() {
      return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '13%', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{marginRight: 100}}>
            <div style={{background:'#FF8C00', borderRadius:100, width: 250, height:250, alignItems:'center', display:'flex', justifyContent:'center', marginBottom:10}}>
              <div style={container}>
                <FastfoodIcon style={{fontSize: 170}} />
              </div>
            </div>
            <Link to='/home'>
              <Typography component='h3' variant='h3' style={{color: 'white'}}>
                Ordina
              </Typography>
            </Link>
            </div>
            <div>
              <div>
              <div style={{background:'#FF8C00', borderRadius:100, width: 250, height:250, alignItems:'center', display:'flex', justifyContent:'center', marginBottom:10}}>
                <div style={container}>
                  <RoomServiceOutlinedIcon style={{fontSize: 170}} />
                </div>
              </div>
              <Link to='/home'>
                <Typography component='h3' variant='h3' style={{color: 'white'}}>
                  Assistenza
                </Typography>
              </Link>

              </div>
            </div>
            </div>
            </div>
    );
  }
}



export default Index
