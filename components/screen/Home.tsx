/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home: React.FC = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('JobList',{name: 'JobList'});
  };

  return (
    <View style={{ justifyContent: "center", backgroundColor: '#ccc', flex: 1, alignItems: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: '#89CFF0', flexWrap: 'wrap', borderRadius: 5,justifyContent: 'center', padding: 10}} onPress={onPress}>
      <Text style={{ color: '#ffffff' }}>ViewList</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
