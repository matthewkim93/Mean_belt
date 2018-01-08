import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PollService } from '../poll.service'
import { Poll } from '../poll'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  polls: Poll[]= []
  user:string=localStorage.name
  constructor(private _router:Router, private _pollService:PollService) { }

  ngOnInit() {
    console.log(localStorage.name)
    if (localStorage.name==='' || !localStorage.name){
      console.log("I'm not sure why this is not going off")
      this._router.navigate(['/'])
    }
    this._pollService.pollsObserver.subscribe(
      polls => this.polls = polls
    )
    this._pollService.retrieveAll()
  }

  logout(){
    this._pollService.logout()
    this._router.navigate(['/'])
  }
  destroyPoll(id){
    console.log('clicked delete')
    this._pollService.destroyPoll(id)
  }
}
