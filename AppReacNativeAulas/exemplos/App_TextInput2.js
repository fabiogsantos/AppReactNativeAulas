import React from 'react';
import { AppRegistry, TextInput} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {
        name: 'Fabio',
        profissao: 'programador'
      }
    };
  }

  render() {
    return (
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        autoFocus={true}
        editable={true}
        multiline
        numberOfLines={10}
        keyboardType="ascii-capable"
        style={{marginTop:50,marginHorizontal:10, heigth:40, borderColor:'gray',borderWidth:1}}
        placeholder='Digite seu nome'
        value={this.state.user.name}
        onChangeText={text=>{
           this.setState({user:{...this.state.use, name:text}})
        }}        
      />
    );
  };
};
