import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { restaurantsMainReducer } from './restaurants/store/restaurantsMain.reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {createRestaurantReducer} from "./restaurants/store/createResaurant.reducer";


export const configureStore = () => {
    return createStore(
        combineReducers({
            main: restaurantsMainReducer,
            createRestaurant: createRestaurantReducer,
        }),
        composeWithDevTools(applyMiddleware(thunk)),
    );
};