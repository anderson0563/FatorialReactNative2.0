import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const useFatorial = () => {
  const [value, setValue] = useState(0);

  const setFatorial = (newValue) => {
    fatorial=1;
    n=parseInt(newValue);
    if(n<2) setFatorial(fatorial);
    for(i=2; i<=n; i++)
      fatorial = fatorial*i;
    setValue(fatorial);
  };

  return [value, setFatorial];
};


const Fatorial = () => {
  const [fatorial, setFatorial] = useFatorial(0);
  const [n, setN] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fatorial</Text>
       <TextInput
       style={styles.inputTypeDesign}
        placeholder="Informe n"
        onChangeText={n => setN(n)}
        keyboardType="numeric"
      />
      <Text style={styles.title}>{fatorial}</Text>
      <Button title="clique aqui" onPress={() => setFatorial(n)} style={styles.button}/>
    </View>
  );
};

const App = () => {
  return (
    <View  style={styles.container}>
      <Fatorial />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    verticalAlign: 'middle'
  },
  title: {
    marginTop: 16,
    paddingVertical: 80,
    fontSize: 24,
    textAlign: 'center'
  },
  inputTypeDesign: {
    width: "100%",
    fontSize: 24,
    paddingTop: 24,
    backgroundColor: '#eaeaea',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    paddingVertical: 80,
    fontSize: 28,
    textAlign: 'center',
    height: 40
  }
});

export default App;