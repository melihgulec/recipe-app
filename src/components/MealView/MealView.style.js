import {Dimensions, StyleSheet} from 'react-native';

const screenSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
  },
  image: {
    height: screenSize.height / 4,
    borderRadius: 8,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 8,
    height: 40,
    backgroundColor: '#000',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    opacity: 0.5,
    width: '100%',
    left: 8,
  },
  infoText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    opacity: 1,
    position: 'absolute',
    right: 15,
    bottom: 12,
  },
});
