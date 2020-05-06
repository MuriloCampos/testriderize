import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Text`
  font-size: 100px;
  color: #8f5de8;
  margin: 64px 0 60px;
  font-family: 'Montserrat-BlackItalic';
`;

export const SignInText = styled.Text`
  color: #d3d3d3;
  font-size: 16px;
  text-align: center;
`;

export const StravaButton = styled.TouchableOpacity`
  elevation: 1;
`;

export const StravaButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  background-color: #fc4c02;
  padding: 15px;
  border-radius: 40px;
  margin: 15px 0 20px;
`;

export const OtherOptionButton = styled.TouchableOpacity``;

export const OtherOptionButtonText = styled.Text`
  color: #a6a4a4;
  padding: 8px;
`;
