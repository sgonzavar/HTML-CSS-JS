class Person {
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }

    get getName() {
        return this.name;
    }

    get getLastName() {
        return this.lastname;
    }

    set setName(name) {
        this.name = name;
    }

    set setLastName(lastname) {
        this.lastname = lastname;
    }
}