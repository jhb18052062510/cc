import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
username:string;
password:number;
age:number;
users:Array<any> = []
onAdd(){
  this.users.push({
    "username":this.username,
    "password":this.password,
    "age":this.age
  })
};
onDelete(i){
  this.users.splice(i,1)
}




}
