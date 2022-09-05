import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  Text,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './MealDetail.style';
import Config from 'react-native-config';
import YoutubeButton from '../../components/YoutubeButton';

const MealDetail = ({route}) => {
  const {data, loading, error} = useFetch(
    Config.API_URL + '/lookup.php?i=' + route.params.id,
  );

  const navigateYoutube = async () => {
    if (Linking.canOpenURL(data.meals[0].strYoutube)) {
      await Linking.openURL(data.meals[0].strYoutube);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Image
              style={styles.image}
              source={{uri: data.meals[0].strMealThumb}}
            />
            <View style={styles.mealHeadContainer}>
              <Text style={styles.mealText}>{data.meals[0].strMeal}</Text>
              <Text style={styles.mealArea}>{data.meals[0].strArea}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.ingredientContainer}>
              <Text style={styles.instructionText}>
                {data.meals[0].strInstructions}
              </Text>
              <YoutubeButton onPress={navigateYoutube} />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default MealDetail;
