import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRestaurantsList} from "./restaurants/store/reducer";
import {getRestaurants} from "./restaurants/store/restaurants.actions";
import {Segment} from "semantic-ui-react";

import {Header} from "./restaurants/Header";
import {Filters} from "./restaurants/Filters";
import {Map} from "./restaurants/Map";
import {RestaurantsList} from "./restaurants/RestaurantsList";

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
                    <Map />
                </div>
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