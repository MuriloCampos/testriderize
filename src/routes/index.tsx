import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {
  HeaderContainer,
  HeaderTitle,
  NewPostButtonText,
  HeaderTop,
  NewPostButton,
  NavButtonsContainer,
  NavButton,
  NavButtonText,
} from './styles';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();
const Stack = createStackNavigator();
const App = createBottomTabNavigator();

interface IconWithBadgeProps {
  badgeCount: number;
  color: string;
  size: number;
}

function IconWithBadge({ badgeCount }: IconWithBadgeProps) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 5,
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: '#8f5de8',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: 'Montserrat-BlackItalic',
          color: '#fff',
          fontSize: 30,
          marginBottom: 5,
        }}
      >
        R
      </Text>

      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -3,
            top: 0,
            backgroundColor: 'red',
            borderRadius: 10,
            width: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

const DashboardRoutes: React.FC = () => {
  const [activeNavButton, setActiveNavButton] = React.useState('0');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderContainer>
            <HeaderTop>
              <HeaderTitle>Riderize</HeaderTitle>
              <View style={{ flexDirection: 'row' }}>
                <Icon
                  name="search"
                  size={25}
                  color="#8f5de8"
                  style={{ marginRight: 15 }}
                />
                <Icon
                  name="send"
                  size={25}
                  color="#8f5de8"
                  style={{ marginRight: 15 }}
                />
                <View
                  style={{
                    position: 'absolute',
                    right: 3,
                    top: -6,
                    backgroundColor: 'red',
                    borderRadius: 10,
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}
                  >
                    1
                  </Text>
                </View>
              </View>
            </HeaderTop>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <NavButtonsContainer>
                <NavButton
                  isActive={activeNavButton === '0'}
                  onPress={() => setActiveNavButton('0')}
                >
                  <NavButtonText isActive={activeNavButton === '0'}>
                    Seguindo
                  </NavButtonText>
                </NavButton>
                <NavButton
                  isActive={activeNavButton === '1'}
                  onPress={() => setActiveNavButton('1')}
                >
                  <NavButtonText isActive={activeNavButton === '1'}>
                    Clubes
                  </NavButtonText>
                </NavButton>
                <NavButton
                  isActive={activeNavButton === '2'}
                  onPress={() => setActiveNavButton('2')}
                >
                  <NavButtonText isActive={activeNavButton === '2'}>
                    Marcas
                  </NavButtonText>
                </NavButton>
              </NavButtonsContainer>
              <NewPostButton>
                <NewPostButtonText>Criar nova publicação</NewPostButtonText>
                <Icon name="plus-circle" color="#fff" size={20} />
              </NewPostButton>
            </View>
          </HeaderContainer>
        ),
      }}
    >
      <Stack.Screen name="DashboardStackScreen" component={Dashboard} />
    </Stack.Navigator>
  );
};

const AppRoutes: React.FC = () => (
  <App.Navigator
    tabBarOptions={{
      activeTintColor: '#8f5de8',
      inactiveTintColor: 'gray',
      showLabel: false,
      tabStyle: {
        borderTopWidth: 3,
        borderTopColor: '#fff',
      },
    }}
  >
    <App.Screen
      name="Dashboard"
      component={DashboardRoutes}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View
            style={{
              borderTopWidth: 3,
              borderTopColor: focused ? '#8f5de8' : '#fff',
            }}
          >
            <Icon name="layout" color={color} size={size} />
          </View>
        ),
      }}
    />
    <App.Screen
      name="Profile"
      component={DashboardRoutes}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View
            style={{
              borderTopWidth: 3,
              borderTopColor: focused ? '#8f5de8' : '#fff',
            }}
          >
            <Icon name="user" color={color} size={size} />
          </View>
        ),
      }}
    />
    <App.Screen
      name="Home"
      component={DashboardRoutes}
      options={{
        tabBarIcon: ({ color, size }) => (
          <IconWithBadge color={color} size={size} badgeCount={1} />
        ),
      }}
    />
    <App.Screen
      name="Search"
      component={DashboardRoutes}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View
            style={{
              borderTopWidth: 3,
              borderTopColor: focused ? '#8f5de8' : '#fff',
            }}
          >
            <Icon name="search" color={color} size={size} />
          </View>
        ),
      }}
    />
    <App.Screen
      name="Notifications"
      component={DashboardRoutes}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View
            style={{
              borderTopWidth: 3,
              borderTopColor: focused ? '#8f5de8' : '#fff',
            }}
          >
            <Icon name="bell" color={color} size={size} />
          </View>
        ),
      }}
    />
  </App.Navigator>
);

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="App" component={AppRoutes} />
  </Auth.Navigator>
);

export default AuthRoutes;
