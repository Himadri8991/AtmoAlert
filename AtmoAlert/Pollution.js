
    const url = 'https://open-weather28.p.rapidapi.com/pincode/in/712235';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e1694d8675msh1573af00f9077c0p108819jsn95922b4c2a1b',
            'X-RapidAPI-Host': 'open-weather28.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    async function getPollutionData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayPollutionData(data);
    } catch (error) {
        console.error('Error fetching pollution data:', error);
    }
}

function displayPollutionData(data) {
    const pollutionDataElement = document.getElementById('pollutionData');
    pollutionDataElement.innerHTML = `
        <h2>Air Quality Index: ${data.list[0].main.aqi}</h2>
        <p>Components:</p>
        <ul>
            <li>CO: ${data.list[0].components.co} µg/m³</li>
            <li>NO<sub>2</sub>: ${data.list[0].components.no2} µg/m³</li>
            <li>O<sub>3</sub>: ${data.list[0].components.o3} µg/m³</li>
            <li>SO<sub>2</sub>: ${data.list[0].components.so2} µg/m³</li>
            <li>PM2.5: ${data.list[0].components.pm2_5} µg/m³</li>
            <li>PM10: ${data.list[0].components.pm10} µg/m³</li>
      </ul>
      `;
}