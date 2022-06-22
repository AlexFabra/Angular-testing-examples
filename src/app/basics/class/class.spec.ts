import { Person } from './class';

describe('class tests',()=>{

    let reusablePerson = new Person(100);

    afterEach(()=>{
        reusablePerson.resetHp(100);
    })

    it('should return 20 hp',()=>{
        const person:Person = new Person(30);
        const resp = person.getDamage(10);
        expect(resp).toBe(20);
    })

    it('should return 0 hp',()=>{
        const person:Person = new Person(30);
        const resp = person.getDamage(50);
        expect(resp).toBe(0);
    })

    it('should return 100 hp',()=>{
        const resp = reusablePerson.getHp();
        expect(resp).toBe(100);
    })

    //copy the test to test with afterEach:
    
    it('should return 20',()=>{
        const resp = reusablePerson.getDamage(80);
        expect(resp).toBe(20);
    })

    it('should return 20',()=>{
        const resp = reusablePerson.getDamage(80);
        expect(resp).toBe(20);
    })


    
})