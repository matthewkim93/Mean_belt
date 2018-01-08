export class Poll{
  _id:string;
  name:string='';
  question:string='';
  option:string[]=['','','',''];
  votes:number[]=[0,0,0,0];
}
