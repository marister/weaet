import {
    GET_RESTAURANTS_FAILURE,
    GET_RESTAURANTS_REQUEST,
    GET_RESTAURANTS_SUCCESS
} from "./restaurants.actions";

const initialState = {
    restaurants: [],
    loading: false
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_RESTAURANTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurants: action.restaurants
            };
        case GET_RESTAURANTS_FAILURE:
            return {
                ...state,
                loading: false,
                restaurants: action.error
            };
        default:
            return state;
    }
}

export const getRestaurantsList = (state) => state.main.restaurants;
