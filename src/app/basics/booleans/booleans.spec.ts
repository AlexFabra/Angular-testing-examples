import { loggedUser } from './booleans';

describe('boolean tests', () => {
    it('should return true', () => {
        const result = loggedUser();
        expect(result).toBeTruthy();
        expect(result).not.toBeFalsy();
    })
})