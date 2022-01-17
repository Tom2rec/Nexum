import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/locations";

class LocationService {
    getSpecificLocations(address, numberOfPeople, category ) {
        return axios
            .post(API_URL , {
                address: 'Warszawa',
                numberOfPeople: '1',
                category: 'Excercise'
            },{ headers: authHeader() })
            .then(response => {
                if (response.data) {
                    console.log(response.data)
                    localStorage.setItem("locations", JSON.stringify(response.data));
                }
                return response.data;
            });
    }


    getAllLocations() {
        return axios.get(API_URL, { headers: authHeader() });
    }


}

export default new LocationService();
