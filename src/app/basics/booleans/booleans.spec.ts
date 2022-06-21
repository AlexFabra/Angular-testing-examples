import { loggedUser } from './booleans';

xdescribe('boolean tests', () => {
    it('should return true', () => {
        const result = loggedUser();
        expect(result).toBeTruthy();
        expect(result).not.toBeFalsy();
    })
})