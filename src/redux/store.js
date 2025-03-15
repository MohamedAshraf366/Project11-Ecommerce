import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentReducer from './commentSlice'
import storage from "redux-persist/lib/storage";
import {  persistReducer, persistStore } from "redux-persist";
import { handleCart } from "./reducer/handleCart";


let commentPersistingConfig={
    key:"comment",
    storage,
    whitelist:["comments"]
}

// take the configration rootPersistConfig and apply to rootReducer
let rootReducer = combineReducers({ // reducer will b cashed and saved
    handleCart,
    comment:persistReducer(commentPersistingConfig, commentReducer),
    
})


export const Store = configureStore({
    reducer:rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: {
    //         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    //     }
    // })
    
})
export const persistor = persistStore(Store)

//Redux-persist used for local storage
//talk with stor to send data cashed or saved