import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators, FormArray} from'@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    /*this.employeeForm = new FormGroup({
      fullname: new FormControl(),
      email: new FormControl(),
      skills: new FormGroup({
        skillName: new FormControl(),
        experienceInYears: new FormControl(),
        proficiency: new FormControl()
      })

    })*/
    this.employeeForm = this.fb.group({
      fullname:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email:[''],
      skills: this.fb.group({
        skillName:[''],
        experienceInYears:[''],
        proficiency:['']
      })
    })
  }
  onSubmit(){
    //There are two ways to access a form value
    //1. this.employeeForm.controls.fullname.value
    //2.this.employeeForm.get('fullname').value
    console.log(this.employeeForm.value);
  }
  onLoadDataClick(){
    //Use setValue() to update all form controls
    //Use patchValue() to update a sub-set of form controls
    this.employeeForm.patchValue({
      fullname:'Kendra Jordan',
      email:'kendra.jordan8@gmail',
      skills:{
        skillName:'coding',
        experienceInYears:'2',
        proficiency:'beginner'
      }
    });
  }
}
