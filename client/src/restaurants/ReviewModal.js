import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, Dimmer, Header, Loader, Modal, Segment} from "semantic-ui-react";
import {getSelectedRestaurant, isReviewLoading, isReviewModalOpened} from "./store/restaurantsMain.reducer";
import Rating from "react-rating";
import {saveRating} from "./store/restaurants.actions";

class ReviewModalComponent extends React.Component {
    setRating = (rating) => {
        this.props.saveRating(rating, this.props.restaurant);
    };

    render() {
        return (
            <Modal open={this.props.opened} className="review-modal">
                { this.props.isLoading ?
                    <Dimmer active inverted>
                        <Loader />
                    </Dimmer>
                    :
                    null
                }

                <Modal.Header>Add Review</Modal.Header>
                <Modal.Content>
                    <Rating emptySymbol="fa fa-star-o fa-2x empty" fullSymbol="fa fa-star fa-2x full" onClick={this.setRating}/>
                </Modal.Content>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        opened: isReviewModalOpened(state),
        restaurant: getSelectedRestaurant(state),
        isLoading: isReviewLoading(state)
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    saveRating: saveRating
}, dispatch);

export const ReviewModal = connect(mapStateToProps, mapDispatchToProps)(ReviewModalComponent)