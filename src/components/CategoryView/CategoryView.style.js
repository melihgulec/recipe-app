import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    overflow: 'hidden',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  categoryText: {
    marginLeft: 15,
    fontSize: 20,
    color: '#000',
  },
});
