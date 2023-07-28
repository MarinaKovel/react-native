import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const LoadingView = styled.View`
  color: blue;
  margin: auto;
`;
const LoadingText = styled.Text`
  margin-top: 15px;
  font-size: 20px;
`;

const Loading = () => {
  return (
    <LoadingView>
      <ActivityIndicator size="large" />
      <LoadingText>Loading...</LoadingText>
    </LoadingView>
  )
}

export default Loading;
