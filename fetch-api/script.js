async function getData() {
    const searchType = document.querySelector('.search-options').value;
    const searchQuery = document.querySelector('.search-field').value;
    const results = document.querySelector('.results');
    results.innerHTML = '';
    let dataReceived;

    function displayData(name) {
        const div = document.createElement('div');
        const infoButton = document.createElement('button');
        infoButton.textContent = 'More Info';
        infoButton.onclick = function () { window.location.href = `detail.html?type=${searchType}&name=${name}` };
        div.textContent = name;
        div.appendChild(infoButton);
        div.classList.add('result');
        results.appendChild(div);
    }

    if (searchQuery) {
        if (searchType === 'films') {
            await fetch(`https://www.swapi.tech/api/${searchType}/?title=${searchQuery}`).then(response => response.json()).then(data => {
                dataReceived = data
            });
        }
        else {
            await fetch(`https://www.swapi.tech/api/${searchType}/?name=${searchQuery}`).then(response => response.json()).then(data => {
                dataReceived = data
            });
        }
    } else {
        await fetch(`https://www.swapi.tech/api/${searchType}`).then(response => response.json()).then(data => {
            dataReceived = data
        });
    }
    switch (searchType) {
        case 'films':
            dataReceived.result.forEach(film => {
                displayData(film.properties.title);
            });
            break;
        case 'people':
            if (searchQuery) {
                dataReceived.result.forEach(person => {
                    displayData(person.properties.name);
                });
            } else {
                dataReceived.results.forEach(person => {
                    displayData(person.name);
                });
            }
            break;
        case 'planets':
            if (searchQuery) {
                dataReceived.result.forEach(planet => {
                    displayData(planet.properties.name);
                });
            } else {
                dataReceived.results.forEach(planet => {
                    displayData(planet.name);
                });
            }
            break;
        case 'species':
            if (searchQuery) {
                dataReceived.result.forEach(species => {
                    displayData(species.properties.name);
                });
            } else {
                dataReceived.results.forEach(species => {
                    displayData(species.name);
                });
            }
            break;
        case 'starships':
            if (searchQuery) {
                dataReceived.result.forEach(starship => {
                    displayData(starship.properties.name);
                });
            } else {
                dataReceived.results.forEach(starship => {
                    displayData(starship.name);
                });
            }
            break;
        case 'vehicles':
            if (searchQuery) {
                dataReceived.result.forEach(vehicle => {
                    displayData(vehicle.properties.name);
                });
            } else {
                dataReceived.results.forEach(vehicle => {
                    displayData(vehicle.name);
                });
            }
            break;
    }
}
