const DATABASE_API_URL = 'http://localhost:3000/';

export class RestaurantApiServiceProvider {
    static fetchWithHeaders(url, payload){
        return fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then(async (res) => {
                const resObject = await res.json();
                if (!res.ok) {
                    let errorMessage = '';
                    console.log(resObject);
                    Object.keys(resObject).forEach(key => {
                        errorMessage += `${key} ${resObject[key][0]} `
                    });
                    throw Error(`There was an error [${res.status}] ${errorMessage}`);
                }
                return res;
            })
    }

    static getRestaurants(){
        return fetch(DATABASE_API_URL + "restaurants.json").then((res) => {
            return res.json();
        });
    }

    static saveRestaurant(payload){

        const formattedPayload = {
            restaurant: payload
        };
        return RestaurantApiServiceProvider.fetchWithHeaders(DATABASE_API_URL + "restaurants.json", formattedPayload);
    }

    static saveReview(payload) {
        return RestaurantApiServiceProvider.fetchWithHeaders(DATABASE_API_URL + "reviews.json", payload);
    }
}