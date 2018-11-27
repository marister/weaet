import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './restaurants/store/reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {createRestaurantReducer} from "./restaurants/store/createResaurant.reducer";


export const configureStore = () => {
    return createStore(
        combineReducers({
            main: reducer,
            createRestaurant: createRestaurantReducer,
        }),
        composeWithDevTools(applyMiddleware(thunk)),
    );
};