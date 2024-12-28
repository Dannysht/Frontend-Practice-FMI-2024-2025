window.onload = async () => {
    const results = document.querySelector('.results');
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    const nameParam = urlParams.get('name');

    function displayData(name) {
        const div = document.createElement('div');
        const nameInfo = document.createElement('p');
        nameInfo.textContent = name;
        div.appendChild(nameInfo);
        div.classList.add('result');
        results.appendChild(div);
    }

    if (typeParam === 'films') {
        await fetch(`https://www.swapi.tech/api/${typeParam}/?title=${nameParam}`).then(response => response.json()).then(data => {
            displayData(data.result.properties.title);
        });
    } else {
        await fetch(`https://www.swapi.tech/api/${typeParam}/?name=${nameParam}`).then(response => response.json()).then(data => {
            displayData(data.result.properties.name);
        });
    }
};