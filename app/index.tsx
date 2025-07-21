import Tutorial from "@/components/Tutorial";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
          <Text style={styles.title}>Rust Tutorial</Text>
        <Tutorial />
      </View>
    </ScrollView>
  );
}

const { height, width } = Dimensions.get('window'); // get the height and width of the window

const styles = StyleSheet.create({
  title: {
    paddingTop: height * .05,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  topContainer: {
    height: height * .07,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  leftLogo: {
    width: width * .11,
    height: height * .13,
    position: 'absolute',
    left: 20,
  },
  rightLogo: {
    width: width * .095,
    height: height * .11,
    position: 'absolute',
    right: 20,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    padding: width * 0.02,
    paddingVertical: height * 0.02,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    borderColor: '#f0f0f0',
    backgroundColor: "#89CFF0",
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  topButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 25,
  },
  roleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  selected: {
    flex: 1,
    padding: 15,
    borderRadius: 1,
    backgroundColor: '#F76806', // Lava
  },
  unselected: {
    flex: 1,
    padding: 15,
    borderRadius: 1,
    backgroundColor: '#FED8B1', // Pastel
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
