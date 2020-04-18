import React, {Component} from 'react';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import LightSpeed from 'react-reveal/LightSpeed';


import {connect} from 'react-redux';



const details = {
    display: 'flex',
    flexDirection: 'column',
  };

const content = {
    flex: '1 0 auto',
    background:'#FF8C00',
  };

const controls = {
    display: 'flex',
    alignItems: 'center',
  };




function mapStateToProps(state){
  return {
    cashdesk: state.cashdesk
  }
}

function mapDispatchToProps(dispatch){
  return {
    remove_item: (id) => dispatch({type: 'REMOVE_ITEM', id:id}),
  }
}




class OrderActions extends Component {

  constructor(props){
    super(props);
    this.state = {
      id:this.props.id,
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.order !== prevProps.order){
      this.setState({
        id: this.props.id,
      })
    }
  }



  render(){
    return (
      <div>
        <div style={details}>
          <div style={controls}>
            <CancelIcon style = {{fontSize:40, marginLeft:30}} onClick={() => this.props.remove_item(this.state.id)}/>
          </div>
        </div>
    </div>

    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderActions)
