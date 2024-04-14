const axios = require('axios');

// Function to make API call using async/await
const fetchDataFromAPI = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (err) {
        throw err;
    }
};

// Usage
fetchDataFromAPI()
    .then((data) => {
        console.log('API Response:', data);
    })
    .catch((err) => {
        console.error('Error:', err);
    });
