import { useState, useEffect } from 'react';
import { Alert, FlatList, View, RefreshControl, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Post from '../components/Post';
import Loading from '../components/Loading';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios.get('https://64c167d8fa35860baea081f6.mockapi.io/api/catfacts/catfacts')
    .then(({ data }) => {
      setItems(data);
    }).catch(err => {
      console.log(err);
      Alert.alert('Err', 'Error to fetch')
    }).finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(fetchPosts, []);

  if (isLoading) return <Loading />

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Fact', { id: item.id, title: item.fact })}>
            <Post title={item.fact} imageUrl={item.image} createdAt="26.07.2023"/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HomeScreen;