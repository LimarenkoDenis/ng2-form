import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validations } from './../validators/validations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public myForm: FormGroup;

  public constructor(
    private _fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.myForm = this._fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      amount: []
    });
  }

}
