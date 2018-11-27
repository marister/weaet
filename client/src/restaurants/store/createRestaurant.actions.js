export const OPEN_CREATE_RESTAURANT_MODAL = '[add restaurant] user opened modal';

export const openCreateRestaurantModal = () => (dispatch) => {
    dispatch({
        type: OPEN_CREATE_RESTAURANT_MODAL
    });
};