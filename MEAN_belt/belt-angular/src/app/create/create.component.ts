import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service'
import { Poll } from '../poll'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPoll: Poll = new Poll();
  constructor(private _pollService:PollService, private _router:Router) { }

  ngOnInit() {
    if (localStorage.name==='' || !localStorage.name){
      this._router.navigate(['/'])
    }
  }

  submitPoll(event:Event){
    event.preventDefault();
    this.newPoll.name=localStorage.name
    this._pollService.createPoll(this.newPoll).subscribe(
      poll => {
        this.newPoll = new Poll();
        this._router.navigate(['/dashboard'])
      },
      error => {
        console.log("Error Saving Poll")
      }
    )
    console.log(this.newPoll)
  }
}
