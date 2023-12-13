document.addEventListener("DOMContentLoaded", function() {


    const data = fetchData()

    async function fetchData() {
        const data = await fetch('https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews')
    }
});