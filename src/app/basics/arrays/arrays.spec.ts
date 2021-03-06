import { obtainElements } from './arrays';

describe('array tests', () => {

    it('should return a minimum of 3 elements', () => {
        const result = obtainElements();
        expect(result.length).toBeGreaterThan(2);
    })

    it('should return a maximum of 5 elements', () => {
        const result = obtainElements();
        expect(result.length).toBeLessThan(6);
    })

    // it('should contain 5 elements', () => {
    //     const result = obtainElements();
    //     expect(result).toHaveLength(3);
    // })

    it('should exist number 3', () => {
        const result = obtainElements();
        expect(result).toContain(3);
    })

})