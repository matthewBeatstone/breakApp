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
import Sodas from './products/Sodas.js'
import Cocktail from './products/Cocktail.js';
import Zoom from 'react-reveal/Zoom';
import ItemCard from './ItemCard.js';
import {connect} from 'react-redux';
import GridList from '@material-ui/core/GridList';
import OptionsCard from './OptionsCard.js'


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
        <div style={{marginBottom: 70}}>
          <div onClick={this.openModal.bind(this)} style={cardContainer}>
            <Card style={card}>
              <CardActionArea>
                <CardMedia
                  style={media}
                  image={`data:image/png;base64,${this.props.pic}`}
                  title="categoryImage"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.props.title}
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
            <div style={modalContainer}>
            <ScrollArea
                speed={1.5}
                className="area"
                contentClassName="content"
                horizontal={false}
                >
              {this.props.items.map(item => (
                <ItemCard itemTitle={item.title} itemCost={item.cost} itemPic={item.pic} options={item.option} />
              ))}
              </ScrollArea>

              </div>
            </Modal>
            </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(ProductCard)
