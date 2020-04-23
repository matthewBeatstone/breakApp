import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

function mapStateToProps(state){
  return{
    catalog: state.catalog
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetch_catalog : (data) => dispatch({type:'FETCH_CATALOG', fetchedCatalog: data})
  }
}



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

    fetch('http://127.0.0.1:8080/api/catalog')
      .then(res => res.json())
        .then((data) => {
          this.props.fetch_catalog(data.categories)
          console.log(data)
          console.log(data.categories[0].items)
          data.categories.map(cat => {
            console.log(cat.items)
          })
        })
      }



    render() {
      return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop: '13%', flexDirection:'column'}}>
          <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{marginRight: 100}}>
            <div style={{background:'#FF8C00', borderRadius:100, width: 250, height:250, alignItems:'center', display:'flex', justifyContent:'center', marginBottom:10}}
                 onClick={() => this.props.history.push('/home')}
            >
              <div style={container}>
                <FastfoodIcon style={{fontSize: 170}} />
              </div>
            </div>
              <Typography component='h3' variant='h3' style={{color: 'white'}}>
                Ordina
              </Typography>
            </div>
            <div>
              <div>
              <div style={{background:'#FF8C00', borderRadius:100, width: 250, height:250, alignItems:'center', display:'flex', justifyContent:'center', marginBottom:10}}
                   onClick={() => this.props.history.push('/home')}
              >
                <div style={container}>
                  <RoomServiceOutlinedIcon style={{fontSize: 170}} />
                </div>
              </div>
                <Typography component='h3' variant='h3' style={{color: 'white'}}>
                  Assistenza
                </Typography>

              </div>
            </div>
            </div>
            </div>
    );
  }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
