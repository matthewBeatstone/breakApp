import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ScrollArea from 'react-scrollbar';
import Grid from '@material-ui/core/Grid';
import Beer from './products/Beer.js'
import Coffe from './products/Coffe.js'

const card = {
  maxWidth: 345,
  background:'#FF8C00'
};
const media = {
  height: 140
};

const modal = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
};

const modalContainer = {
    width: 600,
    height: 700
};

const cardContainer = {
  height: 270,
  width: 350,
  bgColor:'#FF8C00',
};


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
      <button type="button" onClick={this.openModal.bind(this)} style={cardContainer}>
        <Card style={card}>
          <CardActionArea>
            <CardMedia
              style={media}
              image={this.props.pic}
              title="categoryImage"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                subtitle
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card>
      </button>
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
            {this.props.productsItems}
          </div>
        </Fade>
      </Modal>
      </div>
    );
  }
}

export default class ProductCategories extends Component {

  constructor(props){
    super(props);

    this.state = {
      modalState: false,
    }

    this.beerImg = require('../assets/images/beer.jpg')
    this.coffeImg = require('../assets/images/coffe.jpeg')
  }

  openModal(){
    this.setState({modalState: true})
  }
  closeModal(){
    this.setState({modalState: false})
  }


  render(){
    return(
      <div>
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
        style={{
          width: 1500,
          height: 850
        }}
        >
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <ProductCard title={'birra'} pic={this.beerImg} productsItems={<Beer />} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProductCard title={'Caffetteria'} pic={this.coffeImg} productsItems={<Coffe />} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProductCard title={'birra'} pic={this.beerImg} productsItems={<Beer />} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProductCard title={'birra'} pic={this.beerImg} productsItems={<Beer />} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProductCard title={'birra'} pic={this.beerImg} productsItems={<Beer />} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProductCard title={'birra'} pic={this.beerImg} productsItems={<Beer />} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProductCard title={'birra'} pic={this.beerImg} productsItems={<Beer />} />
            </Grid>

            </Grid>
      </div>
    </ScrollArea>
    </div>
    )
  }

}
