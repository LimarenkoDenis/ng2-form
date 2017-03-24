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
  public tagInput: FormControl = new FormControl('');

  public constructor(
    private _fb: FormBuilder,
  ) {
    this.product = this._fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      photos: this._fb.array([]),
      price: [''],
      amount: [''],
      tags: this._fb.array([]),
      date: ['']
    });

  }

  public ngOnInit(): void {

  }

  public addTag(tag: string): void {
    if (!this.product.get('tags').value.includes(tag)) {
      this.product.get('tags').value.push(tag);
      this.tagInput.reset();
    }
  }

  public removeTag(index: number): void {
    this.product.get('tags').value.splice(index, 1);
  }
}








        // console.log(value);
        // const tag: string[] = value.split(',');
        // console.log(tag);
        // const lastValue: string = tag[tag.length - 1];
        // console.log(lastValue);

        // tag.forEach((item: string) => {
        //   console.log(item);

        //   let index: number = (this.product.get('tags') as FormArray).value.indexOf(item);
        //   console.log(index);

        //   if (index === -1) {
        //     (this.product.get('tags') as FormArray).push(new FormControl(value));
        //   }
        //   // console.log(a);

        // });
        // (this.product.get('tags') as FormArray).push(new FormControl(value));

        // console.log((this.product.get('tags') as FormArray).value);

    // (this.product.get('photos') as FormArray).push(new FormControl('https://avatars1.githubusercontent.com/u/111951?v=3&s=400'));
    // console.log(this.product.get('photos').value);
