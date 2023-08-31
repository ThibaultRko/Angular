import { AbstractControl, ValidationErrors } from "@angular/forms";

export function valuesAreEqual(control: AbstractControl): ValidationErrors | null {
    
    if (control.value.includes('Pseudo')) {
        return null;
    }

    return {
        controlAreNotEquals: true
    }
}