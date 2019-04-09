/*

Call Center: Imagine you have a call center with three levels of employees: respondent, manager,
and director. An incoming telephone call must be first allocated to a respondent who is free. If the
respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not
free or not able to handle it, then the call should be escalated to a director. Design the classes and
data structures for this problem. Implement a method dispatchCall() which assigns a call to
the first available employee.

*/

class Employee {
    constructor(name) {
        this.name = name;
        this.status = null;
    }
}

class Respondent extends Employee {
    constructor(name) {
        super(name);
    }
}

class Manager extends Employee {
    constructor(name) {
        super(name);
    }
}

class Director extends Employee {
    constructor(name) {
        super(name);
    }
}

class CallCenter {
    constructor() {
        this.respondents = [];
        this.managers = [];
        this.directors = [];
        this.createRandomeEmployees();
    }

    createRandomeEmployees() {
        ["Alice", "Bob", "Cat", "Darla", "Edgar"].forEach((name) => {
            let respondent = new Respondent(name);
            respondent.status = "available";
            this.respondents.push(respondent);
        });
        ["Frida", "Garth", "Harley"].forEach((name) => {
            let manager = new Manager(name);
            manager.status = "available";
            this.managers.push(manager);
        });
        ["Idris"].forEach((name) => {
            let director = new Director(name);
            director.status = "available";
            this.directors.push(director);
        });
    }

    dispatchCall() {
        let employee = this.checkAvailable();
        if (employee !== null) {
            console.log(`${employee.name} will be with your shortly.`);
            employee.status = "busy";
        } else {
            console.log("No employees available at this time.");
        }
    }

    checkAvailable() {
        for (let i = 0; i < this.respondents.length; i++) {
            if (this.respondents[i].status === "available") {
                return this.respondents[i];
            }
        }
        for (let i = 0; i < this.managers.length; i++) {
            if (this.managers[i].status === "available") {
                return this.managers[i];
            }
        }
        for (let i = 0; i < this.directors.length; i++) {
            if (this.directors[i].status === "available") {
                return this.directors[i];
            }
        }
        return null;

    }
}

let c = new CallCenter();
c.dispatchCall();
c.dispatchCall();
c.dispatchCall();
c.dispatchCall();
c.dispatchCall();
c.dispatchCall();
c.dispatchCall();
c.dispatchCall();
c.dispatchCall();
c.dispatchCall();
c.dispatchCall();
