import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const root = {
  width: '100%',
  background: 'orange'
};
const bullet = {
  display: 'inline-block',
  margin: '0 2px',
  transform: 'scale(0.8)',
};
const title = {
  fontSize: 30,
  alignSelf: 'center'
};
const pos = {
  fontsize:30

}
;

export default class OrderCard extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Card style={root}>
        <CardContent>
          <Typography style={title} color="textSecondary" gutterBottom>
            {this.props.title}
          </Typography>
          <Typography variant="h5" component="h5">
            {this.props.quantity}
          </Typography>
          <Typography style={pos} color="textSecondary">
            {this.props.totCost}
          </Typography>
        </CardContent>

      </Card>
    );
  }
}
