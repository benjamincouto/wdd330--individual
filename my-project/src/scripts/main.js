import fetch from 'node-fetch';

const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '6c40fc1457mshc7866eaecbc9379p140911jsn0ebb308da692',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

async function testConnection() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testConnection();
