import React from 'react';
import {Image, Input, Segment, Header as SHeader, Icon} from "semantic-ui-react";
import CoverImage from "../assets/pizza-cover.png";
import moment from 'moment';
import {AddRestaurant} from "./AddRestaurant";

export class Header extends React.Component {
    render() {
        return (
            <Segment basic className="cover">
                <Image src={CoverImage} className="cover-image"/>
                <AddRestaurant />
                <div className="header-content">
                    <SHeader as='h1'>We Eat</SHeader>
                    <SHeader as='h2'>It's {moment().format('HH:MM')} and you're hungry</SHeader>
                    <Input icon='search' iconPosition='left' placeholder='Find a restaurant...' />
                </div>
            </Segment>
        );
    }
}