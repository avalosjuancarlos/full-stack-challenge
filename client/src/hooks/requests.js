const API_URL = '';

// Load all files data
async function httpGetAllFilesData() {
    try {
    const response = await fetch(`${API_URL}/files/data`);
    const data = await response.json();

    //Data to parse
    return data;
    } catch(err){
        return [];
    }
}

export {
    httpGetAllFilesData,
}