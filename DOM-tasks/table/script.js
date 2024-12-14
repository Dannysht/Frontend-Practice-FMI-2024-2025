const tableData = [
    { id: 1, name: 'Пешо', age: 25, country: 'България', profession: 'Програмист' },
    { id: 2, name: 'Ханс', age: 30, country: 'Германия', profession: 'Автомонтьор' },
    { id: 3, name: 'Хенриете5', age: 85, country: 'Дания', profession: 'Програмист' },
    { id: 3, name: 'Хенриете2', age: 55, country: 'Дания', profession: 'Автомонтьор' },
    { id: 3, name: 'Хенриете4', age: 15, country: 'Дания', profession: 'Програмист' },
    { id: 3, name: 'Хенриете3', age: 20, country: 'Дания', profession: 'Рапър' },
    { id: 3, name: 'Хенриете', age: 35, country: 'Дания', profession: 'HR' },
    { id: 4, name: 'Алис', age: 28, country: 'Франция', profession: 'Учител' },
    { id: 5, name: 'Джефри', age: 40, country: 'САЩ', profession: 'Рапър' }
];
const table = document.getElementById('dataTable');
const filterForm = document.getElementById('filterForm');

const tableRow = (person) => {
    return `<tr>
<td>${person.id}</td>
<td>${person.name}</td>
<td>${person.age}</td>
<td>${person.country}</td>
<td>${person.profession}</td>
</tr>`
};

tableData.forEach((person) => {
    table.tBodies[0].innerHTML += tableRow(person);
});

document.getElementsByClassName
document.getElementsByTagName
document.querySelectorAll

filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTableData = [...tableData];

    // sort

    // country =>  filter
    const sort = [...document.querySelectorAll("[name='sort']")].find((el) => el.checked).value;
    const countryFilter = document.getElementById("country").value;
    const professionFilter = document.getElementById("profession").value;
    const minAge = document.getElementById("minAge").value;
    const maxAge = document.getElementById("maxAge").value;

    if (sort !== "none") {
        newTableData = newTableData.sort((person1, person2) => {
            if (sort === "name") {
                return person1.name.localeCompare(person2.name);
            }

            if (sort === "age") {
                return person1.age - person2.age;
            }
        });
    }

    if (countryFilter !== "all") {
        newTableData = newTableData.filter((person) => person.country === countryFilter);
    }

    if (professionFilter !== "all") {
        newTableData = newTableData.filter((person) => person.profession === professionFilter);
    }

    newTableData = newTableData.filter((person) => minAge <= person.age && person.age <= maxAge);

    table.tBodies[0].innerHTML = "";

    newTableData.forEach((person) => {
        table.tBodies[0].innerHTML += tableRow(person);
    });
});