import {SAVE_RESTAURANT_FAILURE, SAVE_RESTAURANT_REQUEST, SAVE_RESTAURANT_SUCCESS} from "./restaurants.actions";
import {OPEN_CREATE_RESTAURANT_MODAL} from "./createRestaurant.actions";

const initialState = {
    loading: false,
    error: null,
    opened: false,
};

export function createRestaurantReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_RESTAURANT_REQUEST:
            return {...state, loading: true, error: null};
        case SAVE_RESTAURANT_FAILURE:
            return {...state, loading: false, error: action.error};
        case OPEN_CREATE_RESTAURANT_MODAL:
            return {...state, loading: false, error: false, opened: true};
        case SAVE_RESTAURANT_SUCCESS:
            return {...state, loading: false, error: false, opened: false};
        default:
            return state;
    }
}

export const isModalOpened = (state) => {
    return state.createRestaurant.opened;
};

export const isLoading = state => {
    return state.createRestaurant.loading;
};