import { FormBuilder, FormGroup } from '@angular/forms';

import { registerForm } from './forms';

describe('form tests', () => {

    let form: registerForm;
    
    beforeEach(() => {
        form = new registerForm(new FormBuilder());
    })

    it('should be a form', () => {
        expect(form.form instanceof FormGroup).toBeTruthy();
    })

    it('should have email and pwd fields', () => {
        expect(form.form.contains('email')).toBeTruthy();
        expect(form.form.contains('pwd')).toBeTruthy();
    })

})