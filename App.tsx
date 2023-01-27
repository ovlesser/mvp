import * as React from 'react'
import MainView from './MainView'
import { createStore } from 'redux'
import { addMainViewDataAction, setMainViewDataAction, viewReducer } from './reducer'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { data1, data2 } from './DataSource'
import { StatusBar, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetailsView } from './DetailsView'

export const store = createStore(viewReducer)
const Stack = createNativeStackNavigator()

const App = (): JSX.Element => {
    useEffect(() => {
        setTimeout(() => {
            store.dispatch(setMainViewDataAction(data1))
        }, 1000)
        setTimeout(() => {
            store.dispatch(addMainViewDataAction(data2))
        }, 5000)
    })

    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={MainView} />
                    <Stack.Screen name="Details" component={DetailsView} />
                </Stack.Navigator>

            </NavigationContainer>
        </Provider>)
}

export default App
