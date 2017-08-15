import { applyMiddleware, compose, createStore } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'
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
  keyPrefix: 'CoffeeWriter-'
})

export default store
