// Promise is handle or not
function handleResponseFromAPI(promise) {
    return promise
        .then(response => {
            // Handle resolution
            console.log('Got a response from the API');
            return { status: 200, body: 'success' };
        })
        .catch(error => {
            // Handle rejection
            return new Error();
        });
}

export default handleResponseFromAPI;
