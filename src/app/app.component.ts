import { Component, OnInit } from '@angular/core';
import { Userservice } from './services/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Userservice]
})
export class AppComponent implements OnInit{
  title = 'Services';
  debouncedTimer: any;
  throttleTimer: any;
  val=""
  val2=""
  ngOnInit(): void {
    this.users=this.userservice.users

  }
  users:{name:any;age:number;Gender:string}[]=[];
  constructor(private userservice:Userservice){}

    demo = (event: any) => {
//debouncing
      if (this.debouncedTimer) {
          clearTimeout(this.debouncedTimer);
      }
      this.debouncedTimer = setTimeout(() => {
          this.val = event.target.value;
      }, 1000);

//throtling
      if (this.throttleTimer) {
        return;
    }
      this.throttleTimer = setTimeout(() => {
        this.val2 = event.target.value;
        this.throttleTimer = null; 
       }, 1000);
  };


dec=()=>{

}

inc=()=>{
  
}




  }

