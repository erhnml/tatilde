import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Favorites = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Favoriler</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Favorites;
