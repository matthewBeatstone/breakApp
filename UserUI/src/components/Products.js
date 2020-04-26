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
import OptionsCard from './OptionsCard.js';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';




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
  alignItems:'center',
  justifyContent: 'center',
  borderRadius:50
};

const modalContainer = {
    width: '98%',
    height: 600,
    borderRadius: 30,
    backgroundColor:'white'
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
                <RemoveCircleRoundedIcon style={{fontSize: 40, marginLeft: 10, color: '#2C3539'}} onClick={()=>this.setState({modalState:false})} />
            <ScrollArea
                speed={1.5}
                className="area"
                contentClassName="content"
                horizontal={false}
                style={{height: '98%'}}
                >
              {this.props.items.map(item => (
                <div key={item.title} style={{justifyContent:'flex-start'}}>
                  <ItemCard
                    itemTitle={item.title}
                    itemCost={item.cost}
                    itemPic={item.pic}
                    options={item.option}
                    formats={item.format} />
                </div>
              ))}
              </ScrollArea>

              </div>
            </Modal>
            </div>
    );
  }
}
export default connect(mapStateToProps)(ProductCard)
