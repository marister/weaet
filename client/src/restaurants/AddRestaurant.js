import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Header, Icon, Form, Modal, Input, Dropdown, Checkbox, Button} from "semantic-ui-react";
import {RestaurantsUtils as RestaurantUtils} from "./services/RestaurantsUtils";
import {saveRestaurant} from "./store/restaurants.actions";
import {isLoading, isModalOpened} from "./store/createResaurant.reducer";
import {openCreateRestaurantModal} from "./store/createRestaurant.actions";
import {LocationSearchInput} from "./components/PlacesAutocomplete";

class AddRestaurantComponent extends React.Component {
    state = {
        name: '',
        address: '',
        cuisine: null,
        max_delivery_time: null,
        tenbis: false
    };

    onSaveRestaurant = () => {
        this.props.saveRestaurant(this.state);
    }

    updateField = (field, data) => {
        this.setState({
            [field]: data.value,
        });
    };

    updateCheckbox = (field, data) => {
        this.setState({
            [field]: data.checked,
        });
    };

    updateAddress = address => {
        this.setState({
            address: address
        })
    };

    render() {
        return (
            <div>
            <Icon name="add circle" className="add-button" onClick={this.props.openCreateRestaurantModal}/>
            <Modal open={this.props.opened} className="add-restaurant-modal">
                <Modal.Header>Add Restaurant</Modal.Header>
                <Modal.Content>
                    <Form.Field>
                        <label>Restaurant Name</label>
                        <Input placeholder="Name..." fluid onChange={(e, data) => { this.updateField('name', data) }} />
                    </Form.Field>
                    <Form.Field>
                        <label>Address</label>
                        <LocationSearchInput onChange={this.updateAddress}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Cuisine Type</label>
                        <Dropdown placeholder="Cuisine..."
                                  fluid
                                  selection
                                  options={RestaurantUtils.getCuisineTypesOptions()}
                                  onChange={(e, data) => { this.updateField('cuisine', data) }}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Delivery Time</label>
                        <Dropdown placeholder="Speed..."
                                  fluid
                                  selection
                                  options={RestaurantUtils.getSpeedDefaultOptions()}
                                  onChange={(e, data) => { this.updateField('max_delivery_time', data) }}/>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label="Accepts Ten Bis?" onChange={(e, data) => { this.updateCheckbox('tenbis', data) }}/>
                    </Form.Field>
                    <Form.Field>
                        <Button fluid color="red" onClick={this.onSaveRestaurant} loading={this.props.loading}>SAVE</Button>
                    </Form.Field>
                </Modal.Content>
            </Modal>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        opened: isModalOpened(state),
        loading: isLoading(state)
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    saveRestaurant: saveRestaurant,
    openCreateRestaurantModal: openCreateRestaurantModal
}, dispatch);

export const AddRestaurant = connect(mapStateToProps, mapDispatchToProps)(AddRestaurantComponent)