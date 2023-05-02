import * as React from 'react';
import {Image, Button, Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from './src/Pages/MainPage';
import Title from './src/Components/Title';
import Location from './src/Pages/Location';
import Phone from './src/Pages/Phone';
import Meet from './src/Pages/Meet/Meet';
import Type from './src/Pages/Meet/Type';
import Malfunctions from './src/Pages/Meet/Malfunctions';
import './src/Seetings/Languages/i18n';
import Vehicle from './src/Components/Vehicle';

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainPage}
          options={{
            headerTitle: props => <Title />,
          }}
        />
        <Stack.Screen
          name="Meet"
          component={Meet}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Type"
          component={Type}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Vehicle"
          component={Vehicle}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Malfunctions"
          component={Malfunctions}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Phone"
          component={Phone}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
