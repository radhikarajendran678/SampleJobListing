/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import axiosInstance from '../Axios/axiosConfig';
import ModalView from '../ModalComponent/ModalView';
import HeaderBar from './HeaderBar';
import { applyToJob } from '../redux/action'
import { useSelector } from "react-redux";

const JobList: React.FC = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    userId: '',
    id: 0,
    title: '',
    completed: false
  })
  const appliedlist = useSelector((state) => state.jobs)

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/todos')
      setData(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading) return <View><Text>Loading......</Text></View>
  if (error) return <View> <Text>Error: {error.message}</Text></View>

  const handleItemPress = ({ item }) => {
    setModalVisible(true)
    setSelectedItem(item)
  }

  const renderItem = ({ item }: Object) => (
    <TouchableOpacity onPress={() => handleItemPress({ item })}>
      <View style={styles.listStyle}>
        <Text style={[
            styles.name,
            appliedlist.length > 0 && appliedlist.includes(item) && styles.appliedJobColor
        ]}>
          {item.title}
        </Text>
        <Text style={styles.detail}>JobDetails: {item.title}</Text>
        <Text style={styles.position}>Position: {item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  const closeModal = (item) => {
    dispatch(applyToJob(item))
    setModalVisible(false)
  }

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <HeaderBar />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.listStyle}
        ItemSeparatorComponent={renderSeparator}
      />

      <ModalView
        isvisible={isModalVisible}
        onClose={closeModal}
        item={selectedItem}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: '#ffffff',
    padding: 10,
    flex: 0.5,
    top: 20,
    justifyContent: 'center'
  },
  applyText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  applyButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  modaltext: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    color: '#000'
  },
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
  listStyle: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  appliedJobColor: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#DDF2D1'
  },
  detail: {
    fontSize: 14,
    color: '#333',
  },
  position: {
    fontSize: 14,
    color: '#333',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
});

export default JobList;
