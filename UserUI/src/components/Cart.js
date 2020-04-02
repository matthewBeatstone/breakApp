import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ScrollArea from 'react-scrollbar'
import {connect} from 'react-redux'
import ShopCard from '../components/ShopCard.js'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Checkout from './Checkout.js';
import LightSpeed from 'react-reveal/LightSpeed';





const content = {
  background:'#FF8C00',
  marginTop: 20,
  borderRadius: 100,
  height: 70,
  flexDirection:'column'
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
  width: 400,
  height: 60,
  borderRadius: 40,
  backgroundColor: '#FF8C00',
  position:'absolute',
  bottom: 20,
}




function mapStateToProps(state){
  return({
    order: state.order
  })
}


class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false,
      buttonText: 'ORDINA',
      disableButton: false,
      modalState: false,
      tot: '',

    }
    console.log(this.props.order)
  }


  componentDidUpdate(prevProps){
    if(this.props.order !== prevProps.order){
      var t = 0;
      for (var i = 0; i < this.props.order.length; i++) {
        t += (this.props.order[i].totCost * 10)
        console.log(t)
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
                <LightSpeed left cascade>
                <div key={item.title}>
                  <CardContent style={content}>
                    <div style={{flexDirection:'column'}}>
                      <div>
                      <Typography component='h5' variant='h5'>
                        {item.quantity + ' ' +item.title}
                      </Typography>
                      </div>
                      <div style={{marginLeft:'25%'}}>
                        <ShopCard
                          itemTitle={item.title}
                          quantity={item.quantity}
                          itemCost = {item.itemCost}
                          />
                      </div>
                      {console.log(this.props.order)}
                    </div>
                  </CardContent>
                </div>
              </LightSpeed>
            ))}
            </ScrollArea>
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
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              style={modal}
              open={this.state.modalState}
              onClose={this.closeModal.bind(this)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 1000,
              }}
            >
              <Fade in={this.state.modalState}>
                <div style={modalContainer}>
                  <div style={summary}>
                  <Checkout />
                  </div>
                </div>
              </Fade>
            </Modal>
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
          </div>
      )
    }

  }
}

export default connect(mapStateToProps)(Cart)
