import React from 'react';
import { AppRegistry, TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: ''};
  }

  render() {
    return (
      <TextInput
        style={{marginTop:50,marginHorizontal:10, heigth:40, borderColor:'gray',borderWidth:1}}
        placeholder='Digite seu nome'
        value={this.state.text}
        onChangeText={value=>this.setState({text:value})}        
      />      
    );
  };
};
