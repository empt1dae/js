function myFunc() {
    let river = {
        name: "Волга",
        length: 3530,
        getInfo: function () {
            return `Река: ${this.name}, Длина: ${this.length} км`;
        }
    };
    document.getElementById("output").innerHTML = `<p>${river.getInfo()}</p>`;
}

function myFunc2() {
    let russiaRivers = {
        country: "Россия",
        regions: ["Московская область", "Сибирь", "Дальний Восток"],
        rivers: [
            { name: "Обь", length: 3650 },
            { name: "Енисей", length: 3487 },
            { name: "Лена", length: 4400 }
        ]
    };
    
    let output = "<h3>Все регионы России:</h3><ul>";
    for (let i = 0; i < russiaRivers.regions.length; i++) {
        output += `<li>${russiaRivers.regions[i]}</li>`;
    }
    output += "</ul><h3>Великие реки России:</h3><ul>";
    for (let i = 0; i < russiaRivers.rivers.length; i++) {
        output += `<li>${russiaRivers.rivers[i].name} - ${russiaRivers.rivers[i].length} км</li>`;
    }
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}

function myFunc3() {
    class Worker {
        constructor(name, surname, rate, days) {
            this.name = name;
            this.surname = surname;
            this.rate = rate;
            this.days = days;
        }
        getSalary() {
            return this.rate * this.days;
        }
    }
    
    let worker1 = new Worker("Иван", "Иванов", 2000, 20);
    let worker2 = new Worker("Петр", "Петров", 2500, 22);
    

    
    let output = `<p>Работник: ${worker1.name} ${worker1.surname}</p>`;
    output += `<p>Ставка за день: ${worker1.rate} руб.</p>`;
    output += `<p>Отработано дней: ${worker1.days}</p>`;
    output += `<p>Зарплата: ${worker1.getSalary()} руб.</p>`;
    output += `<p>Работник: ${worker2.name} ${worker2.surname}</p>`;
    output += `<p>Ставка за день: ${worker2.rate} руб.</p>`;
    output += `<p>Отработано дней: ${worker2.days}</p>`;
    output += `<p>Зарплата: ${worker2.getSalary()} руб.</p>`;
    
    let totalSalary = worker1.getSalary() + worker2.getSalary();
    output += `<p>Общая зарплата двух рабочих: ${totalSalary} руб.</p>`;
    
    document.getElementById("output").innerHTML = output;
}

function myFunc4() {
    class User {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        getFullName() {
            return `${this.name} ${this.surname}`;
        }
    }

    class Student extends User {
        constructor(name, surname, year) {
            super(name, surname);
            this.year = year;
        }
        getCourse() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }

    let student1 = new Student("Анна", "Сидорова", 2021);
    let output = `<p>Студент: ${student1.getFullName()}</p>`;
    output += `<p>Курс: ${student1.getCourse()}</p>`;
    document.getElementById("output").innerHTML = output;
}