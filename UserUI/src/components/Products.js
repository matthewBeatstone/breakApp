import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import ScrollArea from 'react-scrollbar';
import Grid from '@material-ui/core/Grid';
import Beer from './products/Beer.js'
import Coffe from './products/Coffe.js'
import Sodas from './products/Sodas.js'
import Cocktail from './products/Cocktail.js';
import Zoom from 'react-reveal/Zoom';
import ItemCard from './ItemCard.js';
import {connect} from 'react-redux'


const card = {
  maxWidth: 220,
  background:'#FF8C00',
  borderRadius:70
};
const media = {
  height: 140
};

const modal = {
  display: 'flex',
  alignItems:'flex-start',
  justifyContent: 'center',
  borderRadius:50
};

const modalContainer = {
    width: 500,
    height: 300,
    borderRadius: 30
};

const cardContainer = {
  height: 240,
  width: 220,
  background:'#FF8C00',
  borderRadius:50,
  borderColor: '#FF8C00'
};


function mapStateToProps(state){
  return{
    catalog: state.catalog
  }
}



class ProductCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState: false
    }
  }
  openModal(){
    this.setState({modalState: true})
  }
  closeModal(){
    this.setState({modalState: false})
  }

  render(){
    return (
      <div>
      {this.props.catalog.map((cat) => (
        <div>
          <div onClick={this.openModal.bind(this)} style={cardContainer}>
            <Card style={card}>
              <CardActionArea>
                <CardMedia
                  style={media}
                  image={cat.pic}
                  title="categoryImage"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {cat.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    subtitle
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
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
          <Zoom left cascade when={this.state.modalState}>
            <div style={modalContainer}>

              {cat.items.map(item => (
                <ItemCard itemTitle={item.title} itemCost={item.cost} itemPic={item.img} />

              ))}
            </div>
          </Zoom>
        </Modal>

        </div>

      ))}
      </div>
    );
  }
}
export default connect(mapStateToProps)(ProductCard)
