const url = 'https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=100&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e1694d8675msh1573af00f9077c0p108819jsn95922b4c2a1b',
		'X-RapidAPI-Host': 'everyearthquake.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}