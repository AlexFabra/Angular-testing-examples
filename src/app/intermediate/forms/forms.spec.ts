import { FormBuilder, FormGroup } from '@angular/forms';

import { registerForm } from './forms';

xdescribe('form tests', () => {

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

    it('email required',()=>{
        const ctrl = form.form.get('email');
        ctrl?.setValue('');
        expect(ctrl?.valid).toBeFalsy();
    })

    it('email valid',()=>{
        const ctrl = form.form.get('email');
        ctrl?.setValue('alex@gmail.com');
        expect(ctrl?.valid).toBeTruthy();
        ctrl?.setValue('alex@');
        expect(ctrl?.valid).toBeFalsy();
    })

})