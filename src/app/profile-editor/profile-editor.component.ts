import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, EmailValidator } from '@angular/forms';

import { Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['Ignacio', Validators.required],
    email: ['', Validators.required, Validators.email],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value)
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }


  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
