import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { devToolsEnhancer } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { BannerReducer } from './features/banner'
import { PlaceReducer } from './features/place'
import { MissionReducer } from './features/mission'
import { NewsReducer } from './features/news'
import { UserReducer } from './features/user'
import { SettingsReducer } from './features/settings/reducer'

const persistConfig = {
  key: 'root',
  storage: storageSession,
  blacklist: ['banner', 'mission'],
}

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  banner: BannerReducer,
  place: PlaceReducer,
  mission: MissionReducer,
  news: NewsReducer,
  user: UserReducer,
  settings: SettingsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default store
export const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(thunk), devToolsEnhancer({}))
)
export const persistor = persistStore(store)
