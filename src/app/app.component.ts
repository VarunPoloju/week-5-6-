import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {requireCheckboxesToBeCheckedValidator} from './require-checkboxes-to-be-checked.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted=false;
  registrationForm:FormGroup;
  title: any;
  constructor(){}
  
  cities=["Hyderabad","Chennai","Pune","banglore","Kochi"];
  states=["US","NON-US"];
  skills=["Html","sass","es5","bootstrap","angular","react","vue","typescript","express","Node","Mongodb"]
  display;
  
  ngOnInit():void {
    this.registrationForm=new FormGroup({


      //username
      associateName:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(30),Validators.pattern('^[a-zA-Z ]*$') ]),
  
      //email
      associateId:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('^[0-9]*$')]),
  
      //name
      projectId:new FormControl(null,[Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern('^[a-z A-Z 0-9]*$')]),

      location:new FormControl(null,Validators.required),

      place:new FormControl(null,Validators.required),
  
      myCheckboxGroup: new FormGroup({
        
        html: new FormControl(false),
        sass: new FormControl(false),
        es5: new FormControl(false),
        bootstrap: new FormControl(false),
        angular: new FormControl(false),
        react: new FormControl(false),
        vue: new FormControl(false),
        typescript: new FormControl(false),
        express: new FormControl(false),
        node: new FormControl(false),
        mongo: new FormControl(false),
      }, requireCheckboxesToBeCheckedValidator()),

      uploadProfile:new FormControl(null,Validators.required),

      comments:new FormControl(null,Validators.required)
  
    })
  }
 
  offLoc(){
   this.display=this.cities;
  }

  onLoc(){
    this.display=this.states;
  }
 
  getControls(){
    return this.registrationForm.controls;
  }
  
  
  
  onSubmit(){
    this.submitted = true;
    if (this.registrationForm.valid){
      //console.log(this.registrationForm)
      console.log(this.registrationForm.value)
      //console.log(this.registrationForm.get("skills").value)
    }
  }
  
  
  onReset() {
    this.submitted = false;
    this.registrationForm.reset();
}

  



}