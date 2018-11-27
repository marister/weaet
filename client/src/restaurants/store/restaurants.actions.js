import {RestaurantApiServiceProvider} from "../RestaurantApiServiceProvider";

export const SAVE_RESTAURANT_REQUEST = '[Restaurants] started saving restaurant';
export const SAVE_RESTAURANT_SUCCESS = '[Restaurants] save restaurant success';
export const SAVE_RESTAURANT_FAILURE = '[Restaurants] save restaurant failure';

export const GET_RESTAURANTS_REQUEST = '[Restaurants] started fetching restaurants list';
export const GET_RESTAURANTS_SUCCESS = '[Restaurants] fetched restaurants list successfuly';
export const GET_RESTAURANTS_FAILURE = '[Restaurants] error while getting restaurants';

export const getRestaurants = () => (dispatch) => {
    dispatch({
        type: GET_RESTAURANTS_REQUEST
    });

    RestaurantApiServiceProvider.getRestaurants().then((restaurants) => {
        dispatch({
            type: GET_RESTAURANTS_SUCCESS,
            restaurants: restaurants
        });
    }, (error) => {
        dispatch({
            type: GET_RESTAURANTS_FAILURE,
            error: error
        });
    });
};

export const saveRestaurant = (restaurantPayload) => (dispatch) => {
    dispatch({
        type: SAVE_RESTAURANT_REQUEST
    });

    RestaurantApiServiceProvider.saveRestaurant(restaurantPayload).then((res) => {
        console.log(res);
        dispatch({
            type: SAVE_RESTAURANT_SUCCESS,
        });
        getRestaurants()(dispatch);
    }, (error) => {
        console.error(error);
        dispatch({
            type: SAVE_RESTAURANT_FAILURE,
            error: error
        });
    });
};