import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registerUser: FormGroup;
  hide = true;
  
  constructor(private fb: FormBuilder) { 
    this.btnAddUser();
  }

  btnAddUser(){   
    this.registerUser = this.fb.group({
      email: ['', Validators.required ],
      password:['', Validators.required ]
    });
    console.log(this.registerUser) 
  }

  ngOnInit() {
    
  }

}
