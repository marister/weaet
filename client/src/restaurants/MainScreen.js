import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRestaurantsList} from "./store/restaurantsMain.reducer";
import {getRestaurants} from "./store/restaurants.actions";
import {Segment} from "semantic-ui-react";

import {Header} from "./Header";
import {Filters} from "./Filters";
import {Map} from "./Map";
import {RestaurantsList} from "./RestaurantsList";
import {SelectedRestaurant} from "./components/SelectedRestaurant";
import {ReviewModal} from "./ReviewModal";

class MainScreenComponent extends React.Component {
    componentDidMount(){
        this.props.fetchRestaurants();
    }

    render() {
        return (
            <Segment basic style={{ margin:0, padding: 0}}>
                <Header />
                <Filters />
                <div className="restaurants-list-view">
                    <RestaurantsList />
                    <SelectedRestaurant />
                    <Map />
                </div>
                <ReviewModal />
            </Segment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: getRestaurantsList(state)
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchRestaurants: getRestaurants
}, dispatch);

export const MainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreenComponent);