import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Todo">
                <Stack.Screen name="Todo" component={TodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;