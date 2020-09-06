import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  basicForm = new FormGroup({
    inputA: new FormControl(''),
    inputB: new FormControl(''),
    inputC: new FormControl('')
  });

  fixedForm = new FormGroup({
    inputA: new FormControl(''),
    inputB: new FormControl(''),
    inputC: new FormControl('')
  });

  selectForm = new FormGroup({
    inputA: new FormControl('option-4',[Validators.required]),
    inputB: new FormControl('option-3')
  });

  floatingForm = new FormGroup({
    inputA: new FormControl(''),
    inputB: new FormControl(''),
    inputC: new FormControl('')
  });

  inlineForm = new FormGroup({
    inputA: new FormControl(''),
  });

  checkboxRadioForm = new FormGroup({
    inputA1: new FormControl('1'),
    inputA2: new FormControl(''),
    inputA3: new FormControl({value:'', disabled: true}),
    inputB: new FormControl('one')
  });

  validationForm = new FormGroup({
    inputA: new FormControl('',[Validators.required]),
    inputB: new FormControl('',[Validators.required,Validators.email]),
    inputC: new FormControl('',[Validators.required]),
    inputD: new FormControl('',[Validators.email])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("form was submitted");
  }
}
