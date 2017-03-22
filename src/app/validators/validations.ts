import { AbstractControl } from '@angular/forms';

export class Validations {
  public static checkDayInMonth(control: AbstractControl): { [key: string]: string } {
    const day: number = control.get('day').value;
    const month: number = control.get('month').value;
    const year: number = control.get('year').value;
    const dayInMonth: number = new Date(year, month, 0).getDate();
    const age: number = new Date().getFullYear() - year;

    if (age > 100) {
      return {'error_dayInMonth': `You are too old`};
    }

    if (age < 1) {
      return {'error_dayInMonth': `You are too young`};
    }

    return dayInMonth > day ? null : {'error_dayInMonth': `Hmm, the day doesn't look right.`};
  }

  public static checkPasswordsMatch(control: AbstractControl): { [key: string]: string } {
    const password: string = control.get('password').value;
    const confirm: string = control.get('confirm').value;
    if (!(password && confirm)) {
      return { 'error_match': `Empty` };
    };
    return password === confirm ? null : { 'error_match': `These passwords don't match. Try again?` };
  }

  public static checkPassword(control: AbstractControl): { [key: string]: string } {
    const valid: boolean = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(control.value);
    return valid ? null : { 'error_password': `Minimum 8 characters at least 1 Alphabet and 1 Number` };
  }

  // to-do
  public static checkPhone(control: AbstractControl): { [key: string]: string } {
    return null;
  }
}
