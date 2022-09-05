import {Dimensions, StyleSheet} from 'react-native';

const screenSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: screenSize.width,
    height: screenSize.height / 3,
    resizeMode: 'cover',
  },
  mealHeadContainer: {
    padding: 5,
  },
  mealText: {
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold',
  },
  mealArea: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  divider: {
    width: screenSize.width,
    height: 1,
    backgroundColor: 'gray',
  },
  ingredientContainer: {
    flex: 1,
    padding: 5,
  },
  instructionText: {
    color: '#000',
  },
});
