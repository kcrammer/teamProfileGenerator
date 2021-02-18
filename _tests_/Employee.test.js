const Employee = require('../lib/Employee')

describe('Employee Class', () => {

    it('Can instantiate employee instance', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    })

    describe('Constructor', () => {

        it('should set all employee values', () => {
            const name = "Katie";
            const id = 13;
            const email = 'kcrammer@test.com'
            const employee = new Employee(name, id, email);
            expect(employee.name).toBe(name);
            expect(employee.id).toBe(id);
            expect(employee.email).toBe(email);
        }); 

    });

    describe('getName()', () => {
        it('should return the name', () => {
            const employee = new Employee('Katie');
            expect(employee.getName()).toBe('Katie');
        });
    });

    describe('getID()', () => {
        it('should return the ID', () => {
            const employee = new Employee('Katie', '13');
            expect(employee.getID()).toBe('13');
        });
    });

    describe('getEmail()', () => {
        it('should return the email', () => {
            const employee = new Employee('Katie', '13', 'kcrammer@test.com');
            expect(employee.getEmail()).toBe('kcrammer@test.com');
        });
    });

    describe('getrole()', () => {
        it('should return "Employee"', () => {
            const testRole = "Employee";
            const employee = new Employee('Katie', '13', 'kcrammer@test.com');
            expect(employee.getRole()).toBe(testRole);
        })
    });







});