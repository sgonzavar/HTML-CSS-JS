let person = {
    name: 'juan',
    lastname: 'perez',
    fullName: function() { 
        return this.name  + ' ' + this.lastname;
    }
}

console.log(person.fullName());