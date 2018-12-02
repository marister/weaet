import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import {getSelectedRestaurantLocation} from "./store/restaurantsMain.reducer";

const MyMapComponent = withGoogleMap((props) => {
    return (
        <GoogleMap
        defaultZoom={14}
        center={props.isMarkerShown ? props.markerLngLat : {lat: 32.0768528, lng: 34.79263100000003}}
        defaultCenter={{lat: 32.0768528, lng: 34.79263100000003}}>
            {props.isMarkerShown && <Marker defaultPosition={props.markerLngLat}/>}
        </GoogleMap>
    );
});

class MapComponent extends React.Component {
    render() {
        return (
            <MyMapComponent
                isMarkerShown={!!this.props.langLat}
                markerLngLat={this.props.langLat}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`, width: '100%' }} />}
                mapElement={<div style={{ height: `100%`, width: '100%' }} />}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        langLat: getSelectedRestaurantLocation(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export const Map = connect(mapStateToProps, mapDispatchToProps)(MapComponent)