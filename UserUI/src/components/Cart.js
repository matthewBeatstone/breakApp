import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import {connect} from 'react-redux'
import ShopCard from '../components/ShopCard.js'
import Typography from '@material-ui/core/Typography';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Button from '@material-ui/core/Button';
import HeadShake from 'react-reveal/HeadShake';
import {withRouter} from 'react-router-dom';


const content = {
  background:'#FF8C00',
  marginTop: 20,
  borderRadius: 100,
  height: 100,
  display:'flex',
  alignItems: 'center',
  width: '100%'
};
const container = {
  height: 420,
  width: '100%',

};

const button = {
  width: '100%',
  height: 60,
  borderRadius: 40,
  backgroundColor: '#FF8C00',
}

const cardMedia = {
  width: '25%',
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
              speed={1.5}
              className="area"
              contentClassName="content"
              horizontal={false}
              style={container}
              >
              {this.props.order.map(item => (
                <HeadShake spy={item.title}>
                  <div key={item.title} style={content}>
                      <ItemImage pathPic={item.itemPic} />
                      <div style={{left: '25%', position:'absolute', maxWidth: 100}}>
                        <Typography variant='h6' component='h6' align='center'>
                          {item.quantity + ' ' +item.title}
                        </Typography>
                      </div>
                      <div style={{right: 5, position:'absolute'}}>
                        <ShopCard
                          itemTitle={item.title}
                          quantity={item.quantity}
                          itemCost={item.itemCost}
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
                  style={button}
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
            <Typography component='h5' variant={'h5'} style={{marginTop:240, color:'#FFF'}}>
              Il tuo ordine e' vuoto,
             </Typography>
             <Typography component='h6' variant={'h6'} style={{marginTop:5, color: '#FFF'}}>
               Per ordinare selezionare un articolo  e premere "aggiungi"
              </Typography>

               <div>
             <ShoppingCartOutlinedIcon style={{alignItems:'center', marginTop: 50, fontSize: 80, color: '#FF8C00'}} />
             </div>
             <div style={{display:'flex', justifyContent:'center'}}>
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
