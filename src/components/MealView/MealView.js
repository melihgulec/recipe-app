import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealView.style';

const MealView = ({meal, onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: meal.strMealThumb,
          }}
        />
        <View style={styles.infoContainer} />
        <Text style={styles.infoText} ellipsizeMode="tail" numberOfLines={1}>
          {meal.strMeal}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealView;
