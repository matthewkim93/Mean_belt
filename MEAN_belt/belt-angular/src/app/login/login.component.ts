import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PollService} from '../poll.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string=""
  error:string=""
  constructor(private _router:Router, private _pollService:PollService) { }

  ngOnInit() {
  }

  login(event:Event){
    if (this.name.length>0){
      this._pollService.storeUser(this.name)
      this._router.navigate(['/dashboard'])
    }
    else{
      this.error="Your must put your name"
    }
  }
}
