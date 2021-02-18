const employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')


describe('Engineer Class', () => {

    it('Can instantiate Engineer instance', () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe('object');
    })

    describe('Constructor', () => {

        it('should set engineer\'s github', () => {
            const github = 'kcrammer';
            const engineer = new Engineer('Katie', '13', 'kcrammer@test.com', github);
            expect(engineer.github).toBe(github);
        }); 

    });

    describe('get()', () => {
        it('should return the engineer\'s github via getGithub()', () => {
            const github = 'kcrammer';
            const engineer = new Engineer('Katie', '13', 'kcrammer@test.com', github);
            expect(engineer.getGithub()).toBe(github);
        })
    });


    describe('getrole()', () => {
        it('should return "Engineer"', () => {
            const testRole = "Engineer";
            const engineer = new Engineer('Katie', '13', 'kcrammer@test.com', 'kcrammer');
            expect(engineer.getRole()).toBe(testRole);
        })
    });

});