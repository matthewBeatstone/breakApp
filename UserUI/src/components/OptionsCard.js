import React, {Component} from 'react';
import ScrollArea from 'react-scrollbar'
import ItemCard from './ItemCard.js';
import Radio from '@material-ui/core/Radio';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from  '@material-ui/core/Typography';
import UndoIcon from '@material-ui/icons/Undo';
import IconButton from '@material-ui/core/IconButton';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';


export default class OptionsCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false,
      coffeTitle: this.props.itemTitle,
      coffeFormat: '',
      coffeCost: 1.1,
      options: this.props.options,
      format: [
        {type: 'tazza grande', cost:0.5},
        {type: 'tazza piccola', cost: null}
      ]
    }
    console.log(this.state.options)
  }


  render(){
    if(this.state.options.length !== 0){
      return(
          <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{
              height: 200,
            }}
            >
              <div style={{flexDirection:'row', display:'flex'}}>
                <div>
                  <FormControl component="fieldset">
                    <FormGroup>
                    <ScrollArea
                      speed={0.8}
                      className="area"
                      contentClassName="content"
                      horizontal={false}
                      style={{
                        height: 250,
                      }}
                      >
                      {this.state.options.map(coffe => (
                        <div key={coffe.type}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name={coffe.type}
                              onChange={(event) => this.props.handleCheckBox(event, coffe.cost)} />
                          }
                          label={coffe.type}
                        />
                        </div>
                      ))}
                      </ScrollArea>
                    </FormGroup>
                  </FormControl>
                </div>
              </div>

          </ScrollArea>
      )
    }
    else{
      return null
    }

  }
}
