import React from 'react';
import {SafeAreaView, Text, ActivityIndicator, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealView from '../../components/MealView/MealView';

const Meals = ({route, navigation}) => {
  const {data, loading, error} = useFetch(
    Config.API_URL + '/filter.php?c=' + route.params.category,
  );

  const navigateMealDetail = id => {
    navigation.navigate('MealDetail', {id});
  };

  const renderMeal = ({item}) => {
    return (
      <MealView meal={item} onClick={() => navigateMealDetail(item.idMeal)} />
    );
  };

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList data={data.meals} renderItem={renderMeal} />
      )}
    </SafeAreaView>
  );
};

export default Meals;
