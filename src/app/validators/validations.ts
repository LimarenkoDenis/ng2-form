import { AbstractControl } from '@angular/forms';

export class Validations {
  public static checkDayInMay(control: AbstractControl) {
    let day: number = control.get('day').value;
    let month: number = control.get('month').value;
    let year: number = control.get('year').value;
    console.log(day);
    console.log(month);
  }
  public static checkPasswordsMatch(control: AbstractControl): { [key: string]: boolean } {
    const password: string = control.get('password').value;
    const confirm: string = control.get('confirm').value;
    if (!(password && confirm)) {
      return null;
    };
    console.log(password === confirm ? { 'error_phone': true } : false);

    return password === confirm ? { 'error_phone': true } : null;
// (!valid ? { 'error_phone': true } : null)
  }
}
