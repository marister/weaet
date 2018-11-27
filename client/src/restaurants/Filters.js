import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Dropdown, Segment} from "semantic-ui-react";

class FiltersComponent extends React.Component {
    render() {
        return (
            <Segment className="filters" basic>
                <div className="filters-content">
                    <div className="filter-item">
                        <div className="filter-label">
                            Cuisine
                        </div>
                        <Dropdown placeholder='Hamburger, Asian, Salads...' fluid selection />
                    </div>
                    <div className="filter-item">
                        <div className="filter-label">
                            Rating
                        </div>
                        <Dropdown placeholder='How many stars...' fluid selection />
                    </div>
                    <div className="filter-item">
                        <div className="filter-label">
                            Speed
                        </div>
                        <Dropdown placeholder='How long will it be...' fluid selection />
                    </div>
                </div>
            </Segment>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export const Filters = connect(mapStateToProps, mapDispatchToProps)(FiltersComponent)