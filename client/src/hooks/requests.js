const API_URL = '';

// Load all files data
async function httpGetAllFilesData() {
    const response = await fetch(`${API_URL}/files/data`);
    return await response.json();
}

export {
    httpGetAllFilesData,
}