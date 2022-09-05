import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './YoutubeButton.style';

const YoutubeButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>Watch on Youtube</Text>
    </TouchableOpacity>
  );
};

export default YoutubeButton;
