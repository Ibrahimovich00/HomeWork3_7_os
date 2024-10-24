const userList = document.getElementById('userList');

async function fetchData() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();

		let html = ''
		data.forEach(user => {
			html += `
                <div>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong></p>
                    <ul>
                        <li><strong>Street:</strong> ${user.address.street}</li>
                        <li><strong>Suite:</strong> ${user.address.suite}</li>
                        <li><strong>City:</strong> ${user.address.city}</li>
                        <li><strong>Zip Code:</strong> ${user.address.zip_code}</li>
                        <li><strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</li>
                    </ul>
                    <hr>
                </div>
            `
		})

		userList.innerHTML = html
	} catch (error) {
		console.error('Error fetching data:', error);
		userList.innerHTML = 'Failed to load data.';
	}
}

fetchData();
