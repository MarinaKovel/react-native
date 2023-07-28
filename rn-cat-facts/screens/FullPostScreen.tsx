import { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
import Loading from '../components/Loading';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

type Data = {
  id: number;
  fact: string;
  image: string;
}

const FullPostScreen = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Data>();
  const { id } = route.params;

  useEffect(() => {
    axios.get('https://64c167d8fa35860baea081f6.mockapi.io/api/catfacts/catfacts/' + id)
    .then(({ data }) => {
      setData(data);
    }).catch(err => {
      console.log(err);
      Alert.alert('Err', 'Error to fetch')
    }).finally(() => {
      setIsLoading(false);
    })
  }, []);

  if (isLoading) return <Loading />

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.image }} />
      <PostText>{data.fact}</PostText>
    </View>
  )
}

export default FullPostScreen;
