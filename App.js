import {Button, StyleSheet, Text, View } from 'react-native';

import React, {useState} from 'react'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      texto: "Texto Inicial",
      contador: 0
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.contador}</Text>
        <Button 
        title="Ok" 
        onPress={() => {this.setState({contador: this.state.contador + 1});}}></Button>
      </View>
    )
  }
}
// export default function App() {
//   const [texto, setTexto] = useState('Texto inicial')
//   return (
//     <View style={styles.container}>
//       <Text>{texto}</Text>
//       <Button title="Alterar Texto" onPress={() => setTexto("Outro texto")}>
//       </Button>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
