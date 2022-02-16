import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
//declarando requisição 
  request: RequestCreate = {
    name: '',
    job: ''
  }

  response!: ResponseCreate

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  //save users for button save
  save(){
  //resquisto de dadoos
this.userService.createUsers(this.request)
.subscribe( res =>{
  this.response = res;

})
  }

}
