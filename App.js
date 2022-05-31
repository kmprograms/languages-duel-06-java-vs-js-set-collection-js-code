/*
    Utworzyć strukturę, która pozwala przechować imię
    oraz wiek osoby. Następnie przygotować kolekcję elementów
    bez powtórzeń, która przechowa obiekty takiej struktury.
*/
class Person {
    constructor(name,  age) {
        this.name = name;
        this.age = age;
    }

    json() {
        return JSON.stringify(this, Object.keys(this).sort())
    }

    static fromJson(json) {
        const {name, age} = JSON.parse(json);
        return new Person(name, age);
    }

    static unique(people) {
        return [... new Set(people.map(person => person.json()))]
            .map(Person.fromJson)
    }
}

const main = () => {
    const p1 = new Person('ADAM', 10);
    const p2 = new Person('ADAM', 10);

    /*const people = new Set([p1, p2]);
    console.log(people)*/

    const people = Person.unique([p1, p2]);
    console.log(people)
}

main();
