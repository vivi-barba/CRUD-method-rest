import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
//declarando dados a serem recebidos pela requisição
  
  request: RequestCreate = {
    name: '',
    job: ''
  }

  response!: ResponseCreate

  constructor(
    private userService: UserService
    ) { }


  // requisitando dados 
  save(){
  this.userService.createUsers(this.request)
    .subscribe( res =>{
        this.response = res;
  })
}

}
