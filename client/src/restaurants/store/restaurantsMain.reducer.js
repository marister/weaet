import {
    GET_RESTAURANTS_FAILURE,
    GET_RESTAURANTS_REQUEST,
    GET_RESTAURANTS_SUCCESS,
    OPEN_ADD_REVIEW_MODAL, SAVE_REVIEW_REQUEST,
    SELECT_RESTAURANT, SET_RESTAURANT_LOCATION
} from "./restaurants.actions";

const initialState = {
    restaurants: [],
    loading: false,
    selected: null,
    reviewModalOpened: false,
    reviewLoading: false
};

export function restaurantsMainReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RESTAURANTS_REQUEST:
            return {
                ...state,
                loading: true,
                reviewModalOpened: false
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
        case SELECT_RESTAURANT:
            return {
                ...state,
                selected: action.restaurant
            };
        case SET_RESTAURANT_LOCATION:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    latLngObject: action.latLngObject
                }
            };
        case OPEN_ADD_REVIEW_MODAL:
            return {
                ...state,
                reviewModalOpened: true,
                reviewLoading: false
            };
        case SAVE_REVIEW_REQUEST:
            return {
                ...state,
                reviewLoading: true
            };
        default:
            return state;
    }
}

export const getRestaurantsList = (state) => state.main.restaurants;
export const isRestaurantsLoading = (state) => state.main.loading;
export const getSelectedRestaurant = (state) => state.main.selected;
export const isReviewModalOpened = state => state.main.reviewModalOpened;
export const isReviewLoading = state => state.main.reviewLoading;
export const getSelectedRestaurantLocation = state => state.main.selected && state.main.selected.latLngObject;
