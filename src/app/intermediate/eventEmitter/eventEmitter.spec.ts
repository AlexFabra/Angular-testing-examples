import { Cat } from "./eventEmitter";

describe('eventEmitter test', () => {
    let cat: Cat;

    beforeEach(() => 
        cat = new Cat("Tom")
    )
    
    it('Should emit event when fall', () => {

        let meow = "Meow!";
        let eventEmitted:string='';

        cat.meow.subscribe(
            (message: string) => {
                eventEmitted = message;
            }
        );

        cat.fall();
        expect(eventEmitted).toBe(meow);
    })

})