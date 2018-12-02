import React from 'react';

import asian from "../../assets/asian.png";
import burger from "../../assets/burger.png";
import bakery from "../../assets/bakery.png";
import coffee from "../../assets/coffee.png";
import deserts from "../../assets/deserts.png";
import fish from "../../assets/fish.png";
import salad from "../../assets/salad.png";


import {Image} from "semantic-ui-react";

const CUISINE_TYPES = {
    ASIAN: 'Asian',
    BAKERY: 'Bakery',
    BURGER: 'Burger',
    COFFEE: 'Coffee',
    DESERT: 'Desert',
    FISH: 'Fish',
    SALAD: 'Salad'
};

export class RestaurantsUtils {
    static getIconForCuisine(restaurant) {
        switch (restaurant) {
            case CUISINE_TYPES.ASIAN:
                return <Image src={asian} />;
            case CUISINE_TYPES.BAKERY:
                return <Image src={bakery} />;
            case CUISINE_TYPES.BURGER:
                return <Image src={burger} />;
            case CUISINE_TYPES.COFFEE:
                return <Image src={coffee} />;
            case CUISINE_TYPES.DESERT:
                return <Image src={deserts} />;
            case CUISINE_TYPES.FISH:
                return <Image src={fish} />;
            case CUISINE_TYPES.SALAD:
                return <Image src={salad} />;
            default:
                return <Image src={burger}/>;
        }
    }

    static getRatingForAverageRating(restaurants) {

    }

    static getCuisineTypesOptions() {
        return Object.values(CUISINE_TYPES).map(cuisine => {
            return {
                text: cuisine,
                value: cuisine
            }
        });
    }

    static getSpeedDefaultOptions() {
        return [
            {
                text: "Under 30 Minutes",
                value: 30
            },
            {
                text: "Between 30 minutes and an Hour",
                value: 60
            },
            {
                text: "Between an hour to 2 hours",
                value: 120
            },
            {
                text: "Over 2 hours",
                value: 121
            }
        ];
    }

    static getDeliveryTimeText(max_delivery_time) {
        const deliveryTimeOptions = RestaurantsUtils.getSpeedDefaultOptions();
        const deliveryTimeObj = deliveryTimeOptions.find(option => option.value === max_delivery_time);
        return deliveryTimeObj ? deliveryTimeObj.text : "Delivery time is " + max_delivery_time + " minutes.";
    }
}