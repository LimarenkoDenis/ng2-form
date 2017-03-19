import { ReactiveService } from './reactive.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validations } from './../validators/validations';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  public authForm: FormGroup;
  public genders: string[] = ['Female', 'Male', 'Other', 'Rather not say'];
  public months: string[];
  public countries: string[];

  public constructor(
    private _fb: FormBuilder,
    private _reactiveService: ReactiveService
  ) {
    this._reactiveService.getMonth().subscribe((months: string[]) => this.months = months );
    this._reactiveService.getCountries().subscribe((countries: string[]) => this.countries = countries );
    this.authForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      surname: ['', [Validators.required, Validators.minLength(1)]],
      phone: [],
      email: [''],
      password: [],
      confirm: [],
      birthday: this._fb.group({
        day: [''],
        month: [''],
        year: []
      }, { validator: Validations.checkDayInMay }),
      gender: [''],
      location: ['']
    }, {validator: Validations.checkPasswordsMatch});
  }

  public ngOnInit(): void {
    this.authForm.controls['name'].valueChanges.subscribe(
      (value: string) => {
        console.log(`From component ${value}`);
      }
    );
  }
  public submit(form: FormGroup): void {
    console.log(form.value);
  }
}
