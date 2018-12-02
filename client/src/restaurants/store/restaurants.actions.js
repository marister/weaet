import {RestaurantApiServiceProvider} from "../services/RestaurantApiServiceProvider";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

export const SAVE_RESTAURANT_REQUEST = '[Restaurants] started saving restaurant';
export const SAVE_RESTAURANT_SUCCESS = '[Restaurants] save restaurant success';
export const SAVE_RESTAURANT_FAILURE = '[Restaurants] save restaurant failure';

export const SELECT_RESTAURANT = '[Restaurants] user selected a restaurant';
export const SET_RESTAURANT_LOCATION = '[Restaurants] google maps restaurant set';

export const OPEN_ADD_REVIEW_MODAL = '[Restaurants] user clicked add review';
export const SAVE_REVIEW_REQUEST = '[Restaurants] user clicked to add review';

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

export const selectRestaurant = (restaurant) => (dispatch) => {
    geocodeByAddress(restaurant.address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
            dispatch({
                type: SET_RESTAURANT_LOCATION,
                latLngObject: latLng
            });
        })
        .catch(error => console.error('Error', error));
    dispatch({
        type: SELECT_RESTAURANT,
        restaurant: restaurant
    });
};

export const openAddReviewModal = () => (dispatch) => {
    dispatch({
        type: OPEN_ADD_REVIEW_MODAL
    });
};

export const saveRating = (rating, restaurant) => (dispatch) => {
    dispatch({
        type: SAVE_REVIEW_REQUEST
    });

    const payload = {
        rating: rating,
        restaurant_id: restaurant.id
    };
    RestaurantApiServiceProvider.saveReview(payload).then(() => {
        getRestaurants()(dispatch);
    });
};