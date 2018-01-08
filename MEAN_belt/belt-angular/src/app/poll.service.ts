import { Injectable } from '@angular/core';
import { Poll } from './poll'
import { Http } from '@angular/http'
import { BehaviorSubject,Observable } from 'Rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router'

@Injectable()
export class PollService {
  pollsObserver = new BehaviorSubject([])
  pollObserver = new BehaviorSubject(new Poll())
  constructor(private _router:Router, private _http:Http) { }

  storeUser(name){
    localStorage.setItem('name',name)
  }
  logout(){
    localStorage.setItem('name','')
  }
  retrieveAll(){
    this._http.get('/api/poll').subscribe(
      polls => this.pollsObserver.next(polls.json()),
      errorResponse => console.log(errorResponse)
    )
  }
  retrieveOne(id){
    this._http.get('/api/poll/'+id).subscribe(
      poll => this.pollObserver.next(poll.json()),
      errorResponse => console.log(errorResponse)
    )
  }
  createPoll( poll:Poll ):Observable<Poll>{
    return this._http.post('/api/poll',poll)
      .map( (response) => {
        return response.json()
      })
      .catch((error) => {
        return Observable.throw(error)
      })
  }
  destroyPoll(id){
    this._http.delete('/api/poll/'+id).subscribe(
      response => this.retrieveAll(),
      errorResponse => console.log(errorResponse)
    )
  }
  vote(id,poll:Poll){
    this._http.put('/api/poll/'+id,poll).subscribe(
      response => this.retrieveOne(id),
      errorResponse => console.log(errorResponse)
    )
  }
}
