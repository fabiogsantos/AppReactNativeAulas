import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      peso: '0',
      altura: '0',
      imc: '0',
      situacao: ''
    };
  }

  // IMC = peso em kg / (altura em metros * altura em metros)
  calculaIMC() {
     this.setState({imc:(Number(this.state.altura) / ((Number(this.state.altura) * Number(this.state.altura)) / 100)).toFixed(2)});
     if (Number(this.state.imc) < 18.6) {
       this.state.situacao='Abaixo do Peso';
     } else if (Number(this.state.imc) >= 18.6 && Number(this.state.imc) < 25) { 
       this.state.situacao='Peso Ideal (Parabéns)';
     } else if (Number(this.state.imc) >= 25 && Number(this.state.imc) < 25) { 
       this.state.situacao='Levemente Acima do Peso';
     }  

  }

  render() {
    return (
      <View style={styles.containerForm}>
        <View style={styles.containerField}> 
          <Text>Peso (kg)</Text>
          <TextInput
            autoCorrect={false}
            autoFocus={true}
            editable={true}
            keyboardType="numbers-and-punctuation"
            style={{marginTop:5,marginHorizontal:10, height:40, width:100, borderColor:'gray',borderWidth:1}}
            placeholder='Digite seu peso aqui'
            value={this.state.peso}
            onChangeText={peso=>this.setState({peso})}
          />        
        </View>  
        <View style={styles.containerField}> 
          <Text>Altura (cm)</Text>
          <TextInput
            autoCorrect={false}
            editable={true}
            keyboardType="numbers-and-punctuation"
            style={{marginTop:5,marginHorizontal:10, height:40, width:100, borderColor:'gray',borderWidth:1}}
            placeholder='Digite sua altura aqui'
            value={this.state.altura}
            onChangeText={altura=>this.setState({altura})}
          />        
        </View>  
        <View style={styles.containerField}> 
          <Text>IMC:{this.state.imc}</Text>
          <Text>{this.state.situacao}</Text>
        </View>  
        <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={'Calcular'}
          onPress={
              ()=>this.calculaIMC()
            }
        />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30
  },
  containerField: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
});
