import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRestaurantsList} from "./store/reducer";
import {Image, Segment} from "semantic-ui-react";
import {RestaurantsUtils} from "./services/RestaurantsUtils";
import tenbisicon from '../assets/tenbis-icon.png';
import ratingStar from '../assets/star-icon.png';

const Tenbis = () => <Image src={tenbisicon} />;

const RATING_MAP = {
    1: <span><Image src={ratingStar} /></span>,
    2: <span><Image src={ratingStar} /><Image src={ratingStar} /></span>,
    3: <span><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /></span>,
    4: <span><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /></span>,
    5: <span><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /><Image src={ratingStar} /></span>,
}

const StarsRating = (props) => {
    const ratingRounded = Math.floor(props.rating).toString();
    return RATING_MAP[ratingRounded];
};

const Restaurant = (props) => {
    return (
        <div key={props.details.id} className="restaurant-box">
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
        return this.props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} details={restaurant} />)
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
        restaurants: getRestaurantsList(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export const RestaurantsList = connect(mapStateToProps, mapDispatchToProps)(RestaurantsListComponent)