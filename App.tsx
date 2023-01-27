import * as React from 'react'
import MainView from './MainView'
import { createStore } from 'redux'
import { setViewDataAction, viewReducer } from './reducer'
import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { data1 } from './DataSource'

export const store = createStore(viewReducer)

const App = (): JSX.Element => {
    useEffect(() => {
        setTimeout(() => {
            store.dispatch(setViewDataAction(data1))
        }, 1000)
    })

    return (
        <Provider store={store}>
            <MainView/>
        </Provider>)
}

export default App
