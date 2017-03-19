import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  public authForm: FormGroup;
  public genders: string[] = ['Female', 'Male', 'Other', 'Rather not say'];

  public constructor(private _fb: FormBuilder) {
    this.authForm = this._fb.group({
      name: ['', [Validators.maxLength(2)]],
      email: [''],
      birthday: this._fb.group({
        day: ['', [Validators.minLength(1), Validators.maxLength(31)]],
        month: [''],
        year: []
      }),
      gender: ['']
    });
  }

  public ngOnInit(): void {

  }
  public submit(form: FormGroup): void {
    console.log(form.value);
  }
}
