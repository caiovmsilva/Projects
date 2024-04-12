import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default{
    get_Best_Trip(local, date) {
        return apiClient.get(`/trip/?local=${local}&date=${date}`);
    },  
}