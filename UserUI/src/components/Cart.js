import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ScrollArea from 'react-scrollbar'
import {connect} from 'react-redux'
import ShopCard from '../components/ShopCard.js'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



const content = {
    flex: '1 0 auto',
    background:'#FF8C00',
    marginTop: 20,
    borderRadius: 20
  };

function mapStateToProps(state){
  return({
    catalog: state.catalog,
    order: state.order
  })
}


class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false,
    }
    console.log(this.props.order)
  }


  render(){
    if(this.props.order.length !== 0){
      return(
          <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            >

            {this.props.order.map(item => (
              <div key={item.title}>
              <CardContent style={content}>
              <Typography component='h5' variant='h5'>
                {item.quantity + '' +item.title}  
              </Typography>
              <div style={{marginLeft: 70}} >
              <ShopCard
                itemTitle={item.title}
                quantity={item.quantity}
                itemCost = {item.itemCost}
                />
              </div>
              {console.log(this.props.order)}
              </CardContent>
              </div>
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

               <div>
             <ShoppingCartOutlinedIcon style={{alignItems:'center', marginTop: 50, fontSize: 80, color: '#FF8C00'}} />
             </div>
          </div>
      )
    }

  }
}

export default connect(mapStateToProps)(Cart)
