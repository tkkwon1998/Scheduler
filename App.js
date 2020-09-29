import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseEditScreen from './screens/CourseEditScreen';
import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';


const Stack = createStackNavigator();


const App = () => {
  const [user, setUser] = useState({ role: 'admin'});
  return (
    <UserContext.Provider value={user}>
    <NavigationContainer>
      <Stack.Navigator> 
      <Stack.Screen name="ScheduleScreen"
          component={ScheduleScreen}
          options={{ title: 'Schedule'}} 
        />
        <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
};


export default App;