import axios from 'axios';

const BOOK_API_REST_URL = 'http://localhost:9001/v1/item/user/1';

class APIService {

    getBooks(){
        axios.defaults.headers.common = {
            ...axios.defaults.headers.common,
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            "Content-Type": 'application/json',
        };
        axios.defaults.crossDomain = false;
        return axios.get(BOOK_API_REST_URL);
    }

}

export default new APIService();