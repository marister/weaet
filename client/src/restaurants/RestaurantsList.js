import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRestaurantsList, isRestaurantsLoading} from "./store/restaurantsMain.reducer";
import {Image, Segment} from "semantic-ui-react";
import {RestaurantsUtils} from "./services/RestaurantsUtils";
import tenbisicon from '../assets/tenbis-icon.png';
import {selectRestaurant} from "./store/restaurants.actions";
import {StarsRating} from "./components/StarsRating";

const Tenbis = () => <Image src={tenbisicon} />;


const Restaurant = (props) => {
    return (
        <div key={props.details.id} className="restaurant-box" onClick={props.onClick}>
            <div className="icon">
                {RestaurantsUtils.getIconForCuisine(props.details.cuisine)}
            </div>
            <div className="details">
                <div className="name">
                    {props.details.name} { props.details.tenbis ? <Tenbis /> : null }
                </div>
                <div className="rating">
                    { props.details.rating ?
                        <StarsRating rating={props.details.rating} />
                        : null
                    }
                </div>
            </div>

        </div>
    );
};

class RestaurantsListComponent extends React.Component {
    renderRestaurants = () => {
        if(!this.props.restaurants || !this.props.restaurants.length) {
            return null;
        }
        return this.props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} details={restaurant} onClick={() => this.props.selectRestaurant(restaurant)}/>)
    }

    render() {
        console.log(this.props.restaurants);
        return (
            <div className="restaurants-list">
                { this.renderRestaurants() }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: getRestaurantsList(state),
        restaurantsLoading: isRestaurantsLoading(state)
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    selectRestaurant: selectRestaurant
}, dispatch);

export const RestaurantsList = connect(mapStateToProps, mapDispatchToProps)(RestaurantsListComponent)