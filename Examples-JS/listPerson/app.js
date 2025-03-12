const persons = [
    new Person('juan', 'lara'),
    new Person('laura', 'mesa')
]

function showPeople() {
    let lists = '';
    for (element of persons) {
        lists += `<li> ${element.name} ${element.lastname} </li>`;
        document.getElementById('person').innerHTML = lists;
    }
}

function addPerson() {
    console.log("clickme")
    let name = document.getElementById('name');
    let lastname = document.getElementById('lastname');
    if(name.value != '' && lastname.value != '') {
        persons.push({name: name.value, lastname: lastname.value});
        document.getElementById('popUp').innerHTML = "";
    }else {
        document.getElementById('popUp').innerHTML = "No se agrego persona";
    }
    showPeople();
}