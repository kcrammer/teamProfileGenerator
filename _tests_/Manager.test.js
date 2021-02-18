const employee = require('../lib/Employee')
const Manager = require('../lib/Manager')


describe('Manager Class', () => {

    it('Can instantiate Manager instance', () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe('object');
    })

    describe('Constructor', () => {

        it('should set officeNumber', () => {
            const officeNumber = 410;
            const manager = new Manager('Katie', '13', 'kcrammer@test.com', officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
        }); 

    });

    describe('getOfficeNumber()', () => {
        it('should return the manager\'s office number', () => {
            const officeNumber = 410;
            const manager = new Manager('Katie', '13', 'kcrammer@test.com', 410);
            expect(manager.getOfficeNumber()).toBe(officeNumber);
        })
    });


    describe('getrole()', () => {
        it('should return "Manager"', () => {
            const testRole = "Manager";
            const manager = new Manager('Katie', '13', 'kcrammer@test.com', 410);
            expect(manager.getRole()).toBe(testRole);
        })
    });

});