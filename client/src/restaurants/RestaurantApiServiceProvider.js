const DATABASE_API_URL = 'http://localhost:3000/restaurants.json';

export class RestaurantApiServiceProvider {

    static getRestaurants(){
        return fetch(DATABASE_API_URL).then((res) => {
            return res.json();
        });
    }

    static saveRestaurant(payload){
        const formattedPayload = {
            restaurant: payload
        };
        return fetch(DATABASE_API_URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formattedPayload)
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
}