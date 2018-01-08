import { Component, OnInit } from '@angular/core';
import { Poll } from '../poll'
import { PollService } from '../poll.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll:Poll= new Poll();
  constructor(private _pollService:PollService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._pollService.pollObserver.subscribe(
      poll => this.poll = poll
    )
    this._route.paramMap.subscribe(
      (params) => this._pollService.retrieveOne((params.get('id')))
    )
  }
  vote(option){
    this.poll.votes[option]+=1
    console.log(this.poll)
    this._pollService.vote(this.poll._id,this.poll)
  }

}
