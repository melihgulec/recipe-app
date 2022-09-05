import React from 'react';
import {FlatList, SafeAreaView, Text, ActivityIndicator} from 'react-native';
import CategoryView from '../../components/CategoryView/CategoryView';
import useFetch from '../../hooks/useFetch';
import styles from './Categories.style';
import Config from 'react-native-config';
import Seperator from '../../components/Seperator/Seperator';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_URL + '/categories.php');

  const navigateMeals = strCategory => {
    navigation.navigate('Meals', {category: strCategory});
  };

  const renderCategoryComponent = ({item}) => {
    return (
      <CategoryView
        onClick={() => navigateMeals(item.strCategory)}
        category={item}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data.categories}
          renderItem={renderCategoryComponent}
          ItemSeparatorComponent={() => <Seperator />}
        />
      )}
    </SafeAreaView>
  );
};

export default Categories;
