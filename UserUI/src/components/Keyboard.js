import React, {Component} from 'react'
import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/lib/Keyboard.css'; // if you just want css
import 'react-touch-screen-keyboard/lib/Keyboard.scss'

export default class Keyboard extends Component {

  render(){
    if(this.props.show){
      return(
        <KeyboardedInput
          enabled
          type={this.props.type}
          onChange={this.props.onChange}
          value={this.props.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          name={this.props.name}
          inputClassName={this.props.inputClassName}
          keyboardClassName={this.props.keyboardClassName}
          placeholder={this.props.placeholder}
          defaultKeyboard="de"
          secondaryKeyboard="us" // optional
          isFirstLetterUppercase={true} // optional, default is `false`
          uppercaseAfterSpace={true} // optional, default is `false`
          isDraggable={false} // optional, default is `true`
          readOnly={this.props.readOnly} // optional
          opacity={0.9} // optional
        />
      )
    }

  else {
    return null
  }
  }
}
