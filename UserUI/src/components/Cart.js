import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ScrollArea from 'react-scrollbar'
import {connect} from 'react-redux'
import ShopCard from '../components/ShopCard.js'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Checkout from './Checkout.js';
import LightSpeed from 'react-reveal/LightSpeed';
import CardMedia from '@material-ui/core/CardMedia';
import HeadShake from 'react-reveal/HeadShake';
import {Link, withRouter} from 'react-router-dom';


const content = {
  background:'#FF8C00',
  marginTop: 20,
  borderRadius: 100,
  height: 100,
  display:'flex',
  alignItems: 'center',
  width:'100%'
};
const container = {
  height: 700,
  width: '100%',

};
const modalContainer = {
    width: 1000,
    height: 700,
    backgroundColor: '#2C3539'
};
const modal = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
};
const summary = {
  width: 500,
  height: 400
};
const button = {
  width: 670,
  height: 60,
  borderRadius: 40,
  backgroundColor: '#FF8C00',
  bottom: 20,
  marginTop: 360
}

const buttonAbled = {
  width: 670,
  height: 60,
  borderRadius: 40,
  backgroundColor: '#FF8C00',
  bottom: 20,
  marginTop: 152
}

const cardMedia = {
  width: '17%',
  height: 100,
  borderRadius:50,
  justifyContent: 'flex-start',
}




function mapStateToProps(state){
  return({
    order: state.order
  })
}

class ItemImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      pathPic: this.props.pathPic
    }
  }
  render(){
    return(
        <img style={cardMedia} src={this.state.pathPic} />
    )

  }
}





class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false,
      buttonText: 'ORDINA',
      disableButton: false,
      tot: '',
      shouldAnimated: true

    }
    console.log(this.props.order)
  }

  componentDidMount(){
    this.setState({modalState: false})
    if(this.props.order.length > 0){
      this.setState({disableButton: true})
    }
  }


  componentDidUpdate(prevProps){
    if(this.props.order !== prevProps.order){
      var t = 0;
      for (var i = 0; i < this.props.order.length; i++) {
        t += (this.props.order[i].totCost * 10)
        console.log(t)
        this.setState({shouldAnimated: false})
      }
      this.setState({tot: t/10 + '€'})
      if(this.props.order.length > 0){
        this.setState({disableButton: true})
      }
    }
  }

  openModal(){
    this.setState({modalState: true})
  }
  closeModal(){
    this.setState({modalState: false})
  }


  render(){
    if(this.props.order.length !== 0){
      return(
        <div style={container}>
          <ScrollArea
              speed={0.8}
              className="area"
              contentClassName="content"
              horizontal={false}
              style={container}
              >
              {this.props.order.map(item => (
                <HeadShake spy={item.title}>
                  <div key={item.title} style={content}>
                      <ItemImage pathPic={item.itemPic} />
                      <div style={{left: '25%', position:'absolute'}}>
                        <Typography variant='h5'>
                          {item.quantity + ' ' +item.title}
                        </Typography>
                      </div>
                      <div style={{right: 20, position:'absolute'}}>
                        <ShopCard
                          itemTitle={item.title}
                          quantity={item.quantity}
                          itemCost = {item.itemCost}
                          />
                      </div>
                    </div>
              </HeadShake>
            ))}
            </ScrollArea>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  style={buttonAbled}
                  onClick={() => this.props.history.push('/checkout')}
                  disabled={!this.state.disableButton}
                >
                  <Typography
                    style={{color: 'black'}}
                    content={'h6'} variant='h6'
                  >

                      {'ORDINA' + ' ' + this.state.tot}
                   </Typography>
                </Button>
              </div>
            </div>

      )
    }
    else{
      return(
          <div>
            <Typography component='h5' variant={'h5'} style={{marginTop:310, color:'#FFF'}}>
              Il tuo ordine e' vuoto,
             </Typography>
             <Typography component='h7' variant={'h7'} style={{marginTop:5, color: '#FFF'}}>
               Per ordinare selezionare un articolo  e premere "aggiungi"
              </Typography>

               <div>
             <ShoppingCartOutlinedIcon style={{alignItems:'center', marginTop: 50, fontSize: 80, color: '#FF8C00'}} />
             </div>
             <div style={{marginRight: 350}}>
               <Button
                 variant="contained"
                 color="primary"
                 style={button}
                 onClick={this.openModal.bind(this)}
                 disabled={!this.state.disableButton}
               >
                 <Typography
                   style={{color: 'black'}}
                   content={'h6'} variant='h6'
                 >

                     {'ORDINA' + ' ' + this.state.tot}
                  </Typography>
               </Button>
             </div>
          </div>
      )
    }

  }
}

export default withRouter(connect(mapStateToProps)(Cart))
