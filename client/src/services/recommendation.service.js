import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/recommendation/';

class RecommendationService {
    getSpecificRecommendation(id) {
        return axios.get(API_URL+id, { headers: authHeader() }).then(response =>{
            return response;
        });
    }
}

export default new RecommendationService();