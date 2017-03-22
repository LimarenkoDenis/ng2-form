import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validations } from './../validators/validations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public product: FormGroup;

  public constructor(
    private _fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.product = this._fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      photos: [[
        'https://avatars1.githubusercontent.com/u/463703?v=3&s=400',
        'https://avatars1.githubusercontent.com/u/111951?v=3&s=400'
      ]],
      price: [],
      amount: [],
      tags: [],
      date: []
    });

    this.product.controls['tags'].valueChanges.subscribe(
      (value: string) => {
        console.log(value);
      }
    );


    // console.log(this.product.controls['photos']);
    // console.log(this.product.controls['photos'].value.includes('https://avatars1.githubusercontent.com/u/111951?v=3&s=400'));
    // console.log(this.product.controls['photos'].value.includes('newpic'));
    // this.product.controls['photos'].value = this.product.controls['photos'].value.concat(['d']);
    // console.log();

    // if (this.value.includes(topping)) {
    //   this.value = this.value.filter((x: string) => topping !== x);
    // } else {
    //   this.value = this.value.concat([topping]);
    // }
    //  this.product.controls['photos'].setValue('https://avatars1.githubusercontent.com/u/463703?v=3&s=400',
    //     'https://avatars1.githubusercontent.com/u/111951?v=3&s=400');

  // this.product.get('photos').setValue('https://avatars1.githubusercontent.com/u/463703?v=3&s=400',
  //        'https://avatars1.githubusercontent.com/u/111951?v=3&s=400');

  //        console.log(this.product.get('photos'));

  }

}
