import { increment } from './numbers';

describe('number tests',()=>{

    it('should return 100 if n>100',()=>{
        const n = 101;
        const result = increment(n);
        expect(result).toBe(100);
    })

    it('should return n+1 if n>100',()=>{
        const n = 99;
        const result = increment(n);
        expect(result).toBe(100);
    })

})