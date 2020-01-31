import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import {Provider} from 'react-redux'
import './styles/styles.scss'
import newStore from './store/config_store'
import AppRouter from './routers/AppRouter'
import { addContact } from './actions/contactActions'


const store = newStore()
store.subscribe (() => {
    const state = store.getState()
    console.log(state)
})

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

store.dispatch(addContact({name: "Alex Marston", email:'a@g.com'}))
store.dispatch(addContact({name: "Charlotte Stevens", email:'heba@ceslarug.su'}))
store.dispatch(addContact({name: "Sarah Carroll", email:'latew@wo.hu'}))
store.dispatch(addContact({name: "Emma Stephens", email:'ipu@hipzerro.dz'}))
store.dispatch(addContact({name: "Rosie Potter", email:'jakwiavu@niklisob.ke'}))
store.dispatch(addContact({name: "Hulda Foster", email:'tu@kefuper.cv'}))


ReactDOM.render(jsx, document.getElementById('app'))
