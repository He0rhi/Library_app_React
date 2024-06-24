/*Создайте класс «Сотрудник» со свойствами имени и зарплаты. Включите метод расчета годовой зарплаты. Создайте подкласс под
названием «Менеджер», который наследуется от класса «Сотрудник» и добавляет дополнительное свойство для отдела. Переопределить метод расчета
годовой зарплаты, чтобы включить бонусы для менеджеров. Создайте два экземпляра класса «Менеджер» и рассчитайте их годовую зарплату*/

class Employee{
    
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary(){return this.salary*12;}
}

class Manager extends Employee{

constructor(name,salary,department,bonus){
    super(name,salary);
    this.department = department;
    this.bonus = bonus;
}

calculateAnnualSalary(){ return this.salary*12+this.bonus;}
}

const manager = new Manager("Manager1",1000,"Marketing Department",200);
const employee = new Employee("Employe1",1000);
console.log("Имя: "+manager.name + ", Зарплата: " + manager.calculateAnnualSalary() + ", Отдел: " + manager.department);
console.log("Имя: "+employee.name + ", Зарплата: " + employee.calculateAnnualSalary() + ", Отдел: " + employee.department);
