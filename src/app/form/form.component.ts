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
    tag = tag.trim();
    if (!this.product.get('tags').value.includes(tag) && this.product.get('tags').value !== '') {
      this.product.get('tags').value.push(tag);
      this.tagInput.reset();
    }
  }

  public removeTag(index: number): void {
    this.product.get('tags').value.splice(index, 1);
  }
}







// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/filter';

// private addTag$$: Subject<string> = new Subject<string>();


// public addTag(tag: string): void {
//   this.addTag$$.next(tag);
// }


// this.addTag$$
//   .map((tag: string) => tag.trim())
//   .filter((tag: string) => tag !== '')
//   .subscribe((tag: string) => {
//     if (!this.product.get('tags').value.includes(tag)) {
//       this.product.get('tags').value.push(tag);
//     }
//     this.tagInput.reset();
//   });
