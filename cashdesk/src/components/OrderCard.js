import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ScrollArea from 'react-scrollbar'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';



const content = {
    flex: '1 0 auto',
    background:'#FF8C00',
    marginTop: 20,
    borderRadius: 20
  };

function mapStateToProps(state){
  return{
    cashdesk: state.cashdesk
  }
}


class OrderCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalStatede : false,
    }
  }

  render(){
    if(this.props.cashdesk.length !== 0){
      return(
          <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            >
            {this.props.cashdesk.map(order => (
              order.map(item => (
                <div key={item.title}>
                <CardContent style={content}>
                <Typography component='h5' variant='h5'>
                  {item.title}
                </Typography>

                  <Typography component='h5' variant='h5'>
                  {item.quantity}
                  </Typography>
                  <Typography>
                    {item.totCost} €
                  </Typography>
                {console.log(this.props.order)}
                </CardContent>
                </div>
            ))
          ))}
          </ScrollArea>
      )
    }
    else{
      return(
          <div>
            <Typography component='h5' variant={'h5'} style={{marginTop:310, color:'#FFF'}}>
              Il carrello e' vuoto,
             </Typography>
             <Typography component='h7' variant={'h7'} style={{marginTop:5, color: '#FFF'}}>
               Per ordinare selezionare un articolo  e premere "aggiungi"
              </Typography>
          </div>
      )
    }

  }
}

export default connect(mapStateToProps)(OrderCard)
