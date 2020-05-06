import * as React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  SignInText,
  StravaButton,
  StravaButtonText,
  OtherOptionButton,
  OtherOptionButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo>R</Logo>
      <SignInText>
        Para ter acesso a todas as funcionalidades recomendamos que conecte seu
        strava!
      </SignInText>
      <StravaButton onPress={() => navigation.navigate('App')}>
        <StravaButtonText>Conectar Strava</StravaButtonText>
      </StravaButton>
      <View
        style={{
          shadowColor: 'rgba(0,0,0, .4)',
          shadowOffset: { height: 1, width: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
          backgroundColor: '#fff',
          borderRadius: 40,
          elevation: 2,
        }}
      >
        <OtherOptionButton onPress={() => navigation.navigate('App')}>
          <OtherOptionButtonText>Outras opções de Login</OtherOptionButtonText>
        </OtherOptionButton>
      </View>
    </Container>
  );
};

export default SignIn;
