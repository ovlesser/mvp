import * as React from 'react'
import MainView from './MainView'
import { createStore } from 'redux'
import { addViewDataAction, setViewDataAction, viewReducer } from './reducer'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { data1, data2 } from './DataSource'

export const store = createStore(viewReducer)

const App = (): JSX.Element => {
    useEffect(() => {
        setTimeout(() => {
            store.dispatch(setViewDataAction(data1))
        }, 1000)
        setTimeout(() => {
            store.dispatch(addViewDataAction(data2))
        }, 5000)
    })

    return (
        <Provider store={store}>
            <MainView/>
        </Provider>)
}

export default App
