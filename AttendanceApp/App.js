import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topSection}>
        <View style={styles.coloredBoxes}>
          <View style={[styles.box, styles.redBox]} />
          <View style={[styles.box, styles.blueBox]} />
          <View style={[styles.box, styles.greenBox]} />
          <View style={[styles.box, styles.orangeBox]} />
        </View>
        <View style={styles.whiteArea} />
      </View>
      <View style={styles.graySection} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 1,
    backgroundColor: '#E8F4F4',
    position: 'relative',
  },
  coloredBoxes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  box: {
    position: 'absolute',
  },
  redBox: {
    width: 50,
    height: 25,
    backgroundColor: '#991a1a',
    top: 0,
    left: 0,
  },
  blueBox: {
    width: 100,
    height: 50,
    backgroundColor: '#1b3983',
    top: 0,
    left: 50,
  },
  greenBox: {
    width: 115,
    height: 80,
    backgroundColor: '#5cae60',
    top: 0,
    left: 150,
  },
  orangeBox: {
    width: 115,
    height: 150,
    backgroundColor: '#bf851b',
    top: 0,
    left: 250,
  },
  whiteArea: {
    flex: 1,
  },
  graySection: {
    flex: 3.5,
    backgroundColor: '#6f1a1ab6',
  },
});
