import { AbstractControl, ValidationErrors } from "@angular/forms";


//fonction qui si elle ne renvoie pas null valide l'input
export function emailAlreadyUsed(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const emailList = ['titi@gmail.com', 'toto@gmail.com', 'tata@gmail.com'];
            if (emailList.includes(control.value)){
                resolve({
                    emailAlreadyUsed: true
                })
            }
            resolve(null)
        },3000)
    })
}   
