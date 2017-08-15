import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
)

persistStore(store, {
  blacklist: [], // todo
  keyPrefix: 'CoffeeWriter-'
})

export default store
