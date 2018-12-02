import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, Segment} from "semantic-ui-react";
import {RestaurantsUtils} from "../services/RestaurantsUtils";
import {getSelectedRestaurant} from "../store/restaurantsMain.reducer";
import {StarsRating} from "./StarsRating";
import {openAddReviewModal} from "../store/restaurants.actions";

class SelectedRestaurantComponent extends React.Component {
    render() {
        if(!this.props.restaurant) {
            return null;
        }

        const {name, cuisine, rating, address, max_delivery_time} = this.props.restaurant;
        return (
            <Card className="selected-restaurant">
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 5}}>
                        {RestaurantsUtils.getIconForCuisine(cuisine)}
                    </div>

                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{address}</span>
                        </Card.Meta>
                        <Card.Description>{RestaurantsUtils.getDeliveryTimeText(max_delivery_time)}</Card.Description>
                    </Card.Content>
                </div>
                <Card.Content extra style={{ display: 'flex' }}>
                    <StarsRating rating={rating} />
                    <div style={{ flex: 1 }}></div>
                    <a onClick={this.props.openAddReviewModal}>Add Rating...</a>
                </Card.Content>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurant: getSelectedRestaurant(state)
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    openAddReviewModal: openAddReviewModal
}, dispatch);

export const SelectedRestaurant = connect(mapStateToProps, mapDispatchToProps)(SelectedRestaurantComponent)