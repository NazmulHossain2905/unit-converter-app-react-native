import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

function App() {
  const [feet, setFeet] = React.useState('1');
  const [inches, setInches] = React.useState('12');

  // for inches converter
  const feetHandler = feet => {
    setFeet(feet);
    setInches(String(feet * 12));
  };

  // for feet converter
  const inchesHandler = inches => {
    let f = inches / 12;
    setInches(inches);
    setFeet(Number.isInteger(f) ? String(f) : String(f.toFixed(2)));
  };

  // for feet converter
  // const inchesHandler = inches => {
  //   setInches(inches);
  //   setFeet(
  //     Number.isInteger(inches / 12)
  //       ? String(inches / 12)
  //       : String((inches / 12).toFixed(2)),
  //   );
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unit Converter App</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Feet</Text>
        <TextInput
          style={styles.input}
          value={feet}
          onChangeText={feetHandler}
        />
        <Text style={styles.label}>Inches</Text>
        <TextInput
          style={styles.input}
          value={inches}
          onChangeText={inchesHandler}
        />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2ffff',
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
  },
  inputContainer: {
    marginTop: 30,
    backgroundColor: '#49dcdf',
    padding: 15,
    elevation: 10,
  },
  label: {
    fontSize: 18,
    color: '#222',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    backgroundColor: '#f2ffff',
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    marginTop: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
