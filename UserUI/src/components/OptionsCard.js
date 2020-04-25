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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';





export default class OptionsCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalState : false,
      coffeTitle: this.props.itemTitle,
      coffeFormat: '',
      coffeCost: 1.1,
      options: this.props.options,
      formats: this.props.formats
    }
    console.log(this.state.options)
  }


  render(){
    if(this.state.options.length !== 0){
      return(
        <ExpansionPanel style={{display:'flex', backgroundColor:'#FF8C00'}}>
          <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
            <Typography> opzioni</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <div style={{flexDirection:'row', display:'flex'}}>
                <div>
                  <FormControl component="fieldset">
                    <FormGroup>
                    <ScrollArea
                      speed={2}
                      className="area"
                      contentClassName="content"
                      horizontal={false}
                      style={{
                        height: 150,
                      }}
                      >
                      {this.state.options.map(option => (
                        <div key={option.type}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name={option.type}
                              onChange={(event) => this.props.handleCheckBox(event, option.cost)} />
                          }
                          label={option.type}
                        />
                        </div>
                      ))}
                      </ScrollArea>
                    </FormGroup>
                  </FormControl>
                </div>
                <div>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="format"  onChange={(event) => this.props.handleRadio(event)}>
                      {this.state.formats.map(format => (
                          <FormControlLabel value={format.type} control={<Radio />} label={format.type} />
                      ))}
                      </RadioGroup>
                </FormControl>
                </div>
              </div>
            </ExpansionPanelDetails>
            </ExpansionPanel>

      )
    }
    else{
      return null
    }

  }
}
