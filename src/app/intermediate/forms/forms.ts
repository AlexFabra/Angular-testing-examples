import {FormBuilder, FormGroup, Validators} from '@angular/forms'

export class registerForm {
    
    form: FormGroup;

    constructor(private fb: FormBuilder){
        this.form = this.fb.group({
            email: ['',[Validators.required,Validators.email]],
            pwd: ['',[Validators.required,Validators.minLength(6)]]
        })
    }


}