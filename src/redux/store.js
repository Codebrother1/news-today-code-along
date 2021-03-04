import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import hackerNewsReducer from './hackerNewsReducer'


export default createStore(hackerNewsReducer, applyMiddleware(promiseMiddleware));