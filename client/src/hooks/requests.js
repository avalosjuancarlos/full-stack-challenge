const API_URL = '/api';
//const API_URL = 'http://localhost:3001';

// Load all files data
async function httpGetAllFilesData() {
    try {
        const response = await fetch(`${API_URL}/files/data`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return [];
    }
}

export {
    httpGetAllFilesData,
}