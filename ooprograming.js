// Task 1: Code a Person class
class person{
    constructor(name = "tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}
// Task 2: Code a Worker class
class worker extends person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function createIntern() {
    var intern = new worker("Bob",21,110,0,10);
    intern.goToWork();
    return intern;
}
var intern =createIntern();
console.log(intern);
// Task 4: Code a manager object, methods
function manager() {
    var manager = new worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}
var manager=manager();
console.log(manager);

//Failed: Intern instance - returned: ,,TypeError,, but expected 10,10,Bob,21,110
//Failed: Manager instance - returned: ,,TypeError,, but expected 100,30,Alice,30,110