import { useState } from "react";
import { Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { height, width } = Dimensions.get('window');

export default function Setup() {

  const TextBoxes = () => {
    const [runHello, setRunHello] = useState(false);

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/images/rustacean-flat-happy.png')} />
        </View>
        <View style={styles.numberedBox}>
          <Text style={styles.number}>1</Text>
          <Text>Welcome to a brief tutorial on Rust! This interactive tutorial will cover the first six chapters of the Rust book. The tutorial is written from the perspective that the person has a basic understanding of programming concepts.</Text>
        </View>
        <View style={styles.numberedBox}>
          <Text style={styles.number}>2</Text>
          <Text>To install on Linux or MacOS run the following command: <Text style={styles.codeText}>curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh</Text> {`\nFor Windows follow the instructions at this`} <Text style={styles.link} onPress={() => Linking.openURL('https://doc.rust-lang.org/book/ch01-01-installation.html')}>link.</Text></Text>
        </View>
        <View style={[styles.numberedBox, { flexDirection: 'column', alignItems: 'flex-start' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.number}>3</Text>
            <Text style={{ fontWeight: 'bold' }}>{`Compiling Time! `}</Text>
            <Text>Check out the example below.</Text>
          </View>
          <View style={{ marginLeft: width * 0.017 }}>
            <View style={styles.codeBox}>
              <Text style={{ fontWeight: 'bold' }}>main.rs</Text>
              <Text style={styles.blockCodeText}>
                {`fn main(){ 
  println!("Hello, world!");
}`}
              </Text>
            </View>
            <Text>Run both commands in the command line:</Text>
            <View style={styles.codeBox}>
              <Text style={styles.blockCodeText}>
                {`rustc main.rs 
./main`}
              </Text>
            </View>
            <Text>Hit Run to see the output of this function!</Text>
            <TouchableOpacity style={styles.button} onPress={() => setRunHello(true)}>
              <Text style={{ color: 'white' }}>Run</Text>
            </TouchableOpacity>
            {runHello && (
              <View style={styles.codeBox}>
                <Text style={styles.blockCodeText}>Hello, world!</Text>
              </View>
            )}
          </View>
          <Text style={{ marginLeft: width * 0.017 }}>Note: You can create this main.rs file on your own computer and copy this text to run it locally.</Text>
        </View>
        <View style={styles.numberedBox}>
          <Text style={styles.number}>4</Text>
          <Text>Cargo is Rust's build system and package manager. It is automatically installed if you used the installation process in step 2. This is useful for big projects. <Text style={styles.codeText}>cargo run</Text> can be used to build and run a project in one command that uses the package manager. Click <Text style={styles.link} onPress={() => Linking.openURL('https://doc.rust-lang.org/book/ch01-03-hello-cargo.html')}>here</Text> for more information.</Text>
        </View>
      </View >
    );
  };

  return (
    <View>
      <TextBoxes />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: width * 0.01,
    justifyContent: 'center',
  },
  numberedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: 'black',
  },
  blockCodeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: 'black',
    margin: width * 0.01,
  },
  codeBox: {
    backgroundColor: '#FED8B1',
    borderRadius: 5,
    marginVertical: width * 0.003,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F76806',
    marginVertical: height * .01,
    paddingVertical: height * .01,
    borderRadius: 5,
  },
  number: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 15,
    color: '#333',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});