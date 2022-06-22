import { menssage } from './strings';

describe('string tests', () => {

    it('should return greeting', () => {
        const name = 'John';
        const greeting = menssage(name);
        expect(greeting).toBe('Hi John');
    })

    it('should return string', () => {
        const name = 'John';
        const greeting = menssage(name);
        expect(typeof greeting).toBe('string');
    })

    it('should return greeting with sent parameter', () => {
        const name = 'John';
        const greeting = menssage(name);
        expect(greeting).toContain(name);
    })

})

