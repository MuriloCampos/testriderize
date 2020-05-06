import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Auth = createStackNavigator();
const App = createBottomTabNavigator();

interface IconWithBadgeProps {
  badgeCount: number;
  color: string;
  size: number;
}

function IconWithBadge({ badgeCount, color, size }: IconWithBadgeProps) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 5, // space from bottombar
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
      component={Dashboard}
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
      component={Dashboard}
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
      component={Dashboard}
      options={{
        tabBarIcon: ({ color, size }) => (
          <IconWithBadge color={color} size={size} badgeCount={1} />
        ),
      }}
    />
    <App.Screen
      name="Search"
      component={Dashboard}
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
      component={Dashboard}
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
