import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  user:User[]=[];
  constructor(private http:HttpClient){
   
  }
  ngOnInit(): void {
    this.getUser().subscribe((response)=>{
      this.user=response;
      console.log("response "+response.data)
    })
  }
  getUser(){
    this.http.get<User[]>("localhost:8080/users")
  }

}
class User{
  name:string;
}
